import { useState } from "react";
import "./about.css";

function About() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("frontend");

  const skills = {
    frontend: ["React", "HTML", "CSS", "JavaScript", "Vite"],
    backend: ["Node.js", "Express", "SQL", "Firebase"],
    tools: ["Git", "VSCode", "Figma", "Postman"]
  };

  return (
    <div className="about-wrapper">
      <h2>About Me</h2>

      <section className="about-section bio">
        <h3>Bio</h3>
        <p>
          I'm a software developer passionate about building web apps that create impact.
          I thrive in full-stack environments and love collaborating with others to bring ideas to life.
        </p>
      </section>

      <section className="about-section skills">
        <h3>Skills</h3>
        <div className="skill-tabs">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              className={activeSkillCategory === category ? "active" : ""}
              onClick={() => setActiveSkillCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <ul className="skill-list">
          {skills[activeSkillCategory].map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="about-section experience">
        <h3>Experience</h3>
        <p>Intern @ Digital Nest – Contributing to community-focused apps and client projects.</p>
        <p>Freelance Dev – Delivered sites for local businesses and passion projects.</p>
      </section>

      <section className="about-section education">
        <h3>Education</h3>
        <p>Self-taught through hands-on experience, coding bootcamps, and online courses.</p>
      </section>

      <section className="about-section interests">
        <h3>Fun Facts</h3>
        <ul>
          <li>I enjoy debugging as much as building features.</li>
          <li>Designing UI with Figma is my guilty pleasure.</li>
          <li>I love finding ways to make code cleaner and faster.</li>
        </ul>
      </section>
    </div>
  );
};


export default About;
