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
  
function ProjectCard({ project, onOpen }) {
  const { images = [], title, description, stack = [] } = project;
  return (
    <Motion.article className="project-card" variants={cardVariants}>
      <div className="project-preview">
        {images[0] ? (
          <img src={images[0]} alt="" className="project-img" loading="lazy" />
        ) : (
          <span className="project-image-placeholder">Project preview coming soon</span>
        )}
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
        {stack.length > 0 && <p className="project-stack-preview">{stack.slice(0, 3).join(" · ")}</p>}
        <button className="project-btn" type="button" onClick={onOpen} aria-label={`Open ${title} project details`} title="Open project details">…</button>
      </div>
    </Motion.article>
  );
}
  
export default ProjectCard;
