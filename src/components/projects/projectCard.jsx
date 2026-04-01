import { motion as Motion } from "framer-motion";
import "./projectCard.css";

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};
  
function ProjectCard({ img, title, description, githubURL }) {
  const buttonLabel =
    githubURL?.includes("github.com") ? "View Code" : "View Project";

  return (
    <Motion.article className="project-card" variants={cardVariants}>
      <img src={img} alt={title} className="project-img" loading="lazy" />
      <div className="project-content">
        <div className="project-header">
          <h3>{title}</h3>
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
