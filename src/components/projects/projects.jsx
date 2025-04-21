import React from "react";
import { CardData, TopProjectsData } from "./cardData";
import ProjectCard from "./projectCard";

import "./projects.css";

function Projects() {

const combinedProjects = [
  ...TopProjectsData.map(p => ({ ...p, isTopProject: true })),
  ...CardData,
];

return (
  <section className="projects-section">
    <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Projects</h2>
    <div className="projects-grid">
      {combinedProjects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </div>
  </section>
);
};

export default Projects;