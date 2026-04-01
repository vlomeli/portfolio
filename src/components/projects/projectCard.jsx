import { motion as Motion } from "framer-motion";
import { Star } from "lucide-react";
import "./projectCard.css";

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};
  
function ProjectCard({ img, title, description, githubURL, isTopProject }) {
  const buttonLabel =
    githubURL?.includes("github.com") ? "View Code" : "View Project";

  return (
    <Motion.article className="project-card" variants={cardVariants}>
      <img src={img} alt={title} className="project-img" loading="lazy" />
      <div className="project-content">
        <div className="project-header">
          <h3>{title}</h3>
          {isTopProject && (
            <span className="top-badge" title="Top project">
              <Star className="star-icon" aria-hidden="true" />
              <span>Top</span>
            </span>
          )}
        </div>
        <p>{description}</p>
        {githubURL && (
          <a
            className="project-btn"
            href={githubURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonLabel}
          </a>
        )}
      </div>
    </Motion.article>
  );
}
  
  export default ProjectCard;
