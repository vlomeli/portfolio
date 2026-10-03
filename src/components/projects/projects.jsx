import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { CardData } from "./cardData";
import ProjectCard from "./projectCard";
import ProjectModal from "./projectModal";

import "./projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
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
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="section-title">Projects that turn ideas into useful tools.</h2>
          </div>
          <p className="section-intro">Open a project to explore its story, stack, screenshots, and links.</p>
        </div>
        <Motion.div
          className="projects-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {CardData.map((project) => (
            <ProjectCard key={project.title} project={project} onOpen={() => setSelectedProject(project)} />
          ))}
        </Motion.div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}

export default Projects;
