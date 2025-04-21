import { useState, useEffect, useRef } from "react";
import "./about.css";

function About (){
  const [activeSkillCategory, setActiveSkillCategory] = useState("frontend");

  const skills = {
    frontend: ["React", "HTML", "CSS", "JavaScript"],
    backend: ["Node", "Express", "SQL", "Firebase"],
    tools: ["Git", "Github", "Figma", "Postman"]
  };

  // Scroll reveal logic
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const classList = entry.target.classList;
          if (entry.isIntersecting) {
            classList.add("show");
          } else {
            classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
  
    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const sections = [
    {
      title: "Bio",
      content: (
        <p>
          I'm a software developer passionate about building web apps that create impact.
          I thrive in full-stack environments and love collaborating with others to bring ideas to life.
        </p>
      )
    },
    {
      title: "Skills",
      content: (
        <>
          <div className="skill-tabs">
            {Object.keys(skills).map(category => (
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
        </>
      )
    },
    {
      title: "Experience",
      content: (
        <>
          <p>Intern @ Digital Nest – Contributing to community-focused apps and client projects.</p>
          <p>Freelance Dev – Delivered sites for local businesses and passion projects.</p>
        </>
      )
    },
    {
      title: "Education",
      content: <p>Self-taught through hands-on experience, coding bootcamps, and online courses.</p>
    },
    {
      title: "Fun Facts",
      content: (
        <ul>
          <li>I enjoy debugging as much as building features.</li>
          <li>Designing UI with Figma is my guilty pleasure.</li>
          <li>I love finding ways to make code cleaner and faster.</li>
        </ul>
      )
    }
  ];

  return (
    <div className="timeline-wrapper">
      <h2 className="timeline-title">About Me</h2>
      <div className="timeline">
        {sections.map((section, index) => (
          <div
          key={index}
          ref={el => (sectionRefs.current[index] = el)}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div
            className={`about-section timeline-content ${
              index % 2 === 0 ? "from-left" : "from-right"
            }`}
          >
            <h3>{section.title}</h3>
            {section.content}
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default About;
