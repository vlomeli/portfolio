import { useState, useEffect, useRef } from "react";
import "./about.css";

function About() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("frontend");

  const skills = {
    frontend: ["React", "HTML", "CSS", "JavaScript"],
    backend: ["Node", "Express", "SQL", "Firebase"],
    tools: ["Git", "Github", "Figma", "Postman"],
  };

  // Scroll reveal logic
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const sections = [
    {
      title: "Bio",
      content: (
        <p>
          I care about building things that are thoughtful, useful, and built to
          last. Whether it's refining a small interaction or thinking through
          how systems connect, I enjoy the process of turning ideas into
          experiences people can actually use. I’m curious by nature and often
          dig into how things work—not just to understand them, but to find ways
          to make them better. Outside of code, I value collaboration, good
          communication, and creating a space where people can do their best
          work together. Every project teaches me something new, and that’s a
          big part of what keeps me motivated.
        </p>
      ),
    },
    {
      title: "Skills",
      content: (
        <>
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
        </>
      ),
    },
    {
      title: "Experience",
      content: (
        <>
          <p>
            Intern @ DigitalNEST – Managed multiple frontend and backend
            projects, enhancing features, integrating APIs, and maintaining
            client sites. Collaborated with designers and developers to deliver
            polished, user-focused solutions in a fast-paced setting.
          </p>
          <p>
            Intern @ Bay Valley Tech – Led backend development and supported
            frontend teams on internal full-stack projects. Built scalable APIs,
            contributed to UI/UX planning with Figma and Notion, and ensured
            smooth team communication.
          </p>
          <p>
            Freelance Developer – Speedys Mobile Detailing – Created and sold a
            custom website for a local business, enabling direct customer
            contact and boosting online presence to grow their customer base.
          </p>
        </>
      ),
    },
    {
      title: "Education",
      content: (
        <>
          <p>
            California State University, Stanislaus B.S. in Business
            Administration – Concentration in Computer Information Systems / Built
            a strong foundation in IT and network fundamentals while developing
            skills in research, project leadership, and team communication.
          </p>
          <p>
            Bay Valley Tech – Code Academy / Focused primarily on frontend
            development with HTML, CSS, JavaScript, and React. Strengthened
            skills through solo projects including a login page, email template,
            and multiplication sheet. Completed a full-stack journal app to
            explore backend fundamentals and database integration.
          </p>
        </>
      ),
    },
    // {
    //   title: "Fun Facts",
    //   content: (
    //     <>
    //       <p>Enjoy the outdoors when I can.</p>
    //       <p>Video games are one of my spare time go to.</p>
    //       <p>Genuinly like helping others when the opportunity is given. </p>
    //     </>
    //   ),
    // },
  ];

  return (
    <div className="timeline-wrapper">
      <h2 className="timeline-title">About Me</h2>
      <div className="timeline">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
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
}

export default About;
