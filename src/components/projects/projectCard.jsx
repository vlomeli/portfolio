import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import "./projectCard.css";

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // domino effect
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };
  
  function ProjectCard ({ img, title, description, githubURL, isTopProject, index }) {
    return (
      <motion.div
        className="project-card"
        custom={index} // use index for delay
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={cardVariants}
      >
        <img src={img} alt={title} className="project-img" />
        <div className="project-content">
          <div className="project-header">
            <h3>{title}</h3>
            {isTopProject && <Star className="star-icon" fill="#facc15" />}
          </div>
          <p>{description}</p>
          {githubURL && (
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              <button className="project-btn">View Code</button>
            </a>
          )}
        </div>
      </motion.div>
    );
  };
  
  export default ProjectCard;