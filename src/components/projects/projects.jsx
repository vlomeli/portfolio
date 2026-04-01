import { motion as Motion } from "framer-motion";
import { CardData, TopProjectsData } from "./cardData";
import ProjectCard from "./projectCard";

import "./projects.css";

function Projects() {
  const combinedProjects = [
    ...TopProjectsData.map((p) => ({ ...p, isTopProject: true })),
    ...CardData,
  ];

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
    },
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <h2 className="section-title">Projects</h2>
        <Motion.div
          className="projects-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {combinedProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Motion.div>
      </div>
    </section>
  );
}

export default Projects;
