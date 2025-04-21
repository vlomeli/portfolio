import React from "react";
import { Star } from "lucide-react";
import "./ProjectCard.css";

const ProjectCard = ({ img, title, description, githubURL, isTopProject }) => {
    return (
        <div className="project-card">
          <img src={img} alt={title} className="project-img" />
          <div className="project-content">
            <div className="project-header">
              <h3>{title}</h3>
              {isTopProject && <Star size={18} className="star-icon" />}
            </div>
            <p>{description}</p>
            {githubURL && (
              <a href={githubURL} target="_blank" rel="noopener noreferrer">
                <button className="project-btn">View Project</button>
              </a>
            )}
          </div>
        </div>
      );
    };
    
    export default ProjectCard;