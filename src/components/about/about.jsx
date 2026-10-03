import { useState, useEffect, useRef } from "react";
import "./about.css";

function About() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("frontend");

  const skills = {
    frontend: ["React", "HTML", "CSS", "JavaScript", "WordPress"],
    backend: [
      "Node.js",
      "Express",
      "Python",
      "SQL",
      "MySQL",
      "SQLite",
      "PostgreSQL",
      "Prisma",
      "Firebase",
      "REST APIs",
    ],
    tools: ["Git", "GitHub", "Figma", "Postman", "pytest", "Faker"],
    itSystems: [
      "Endpoint Provisioning",
      "User Lifecycle Management",
      "SaaS Administration",
      "Identity & Access Management",
      "Google Workspace",
      "Asset Management",
      "License Management",
      "Networking",
      "Troubleshooting",
      "Zendesk",
      "Documentation",
    ],
  };

  const skillLabels = {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools",
    itSystems: "IT & Systems",
  };

  const experience = [
    {
      title: "Solutions Engineer",
      organization: "DigitalNEST · Modesto, CA",
      dates: "Aug 2025 – Sep 2026",
    },
    {
      title: "Full-Stack Software Engineer Associate",
      organization: "DigitalNEST · Modesto, CA",
      dates: "Aug 2024 – Aug 2025",
    },
    {
      title: "Full-Stack Software Engineer Intern",
      organization: "Bay Valley Tech · Modesto, CA",
      dates: "Mar 2024 – Aug 2024",
    },
    {
      title: "IT Specialist",
      organization: "Ceres Unified School District · Ceres, CA",
      dates: "Aug 2023 – Mar 2024",
    },
    {
      title: "IT Support Technician Intern",
      organization: "City of Turlock · Turlock, CA",
      dates: "Feb 2023 – Jun 2023",
    },
  ];

  const education = [
    {
      credential: "Free Code Academy",
      institution: "Bay Valley Tech · Modesto, CA",
      dates: "2023 – 2024",
    },
    {
      credential: "B.S. Computer Information Systems",
      institution: "California State University, Stanislaus · Turlock, CA",
      dates: "2021 – 2023",
    },
    {
      credential: "A.S.-T. Business Administration",
      institution: "Merced College · Merced, CA",
      dates: "2019 – 2021",
    },
  ];

  // Scroll reveal logic
  const sectionRefs = useRef([]);

  useEffect(() => {
    const refs = sectionRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const classList = entry.target.classList;
          if (entry.isIntersecting) {
            classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const sections = [
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
                {skillLabels[category]}
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
        <ul className="experience-list">
          {experience.map((role) => (
            <li key={`${role.title}-${role.organization}`}>
              <strong>{role.title}</strong>
              <span>{role.organization}</span>
              <time>{role.dates}</time>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Education",
      content: (
        <ul className="education-list">
          {education.map((program) => (
            <li key={`${program.credential}-${program.institution}`}>
              <strong>{program.credential}</strong>
              <span>{program.institution}</span>
              <time>{program.dates}</time>
            </li>
          ))}
        </ul>
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
    <section id="about" className="about">
      <div className="section-inner timeline-wrapper">
        <h2 className="section-title">About</h2>
        <div className="timeline">
          {sections.map((section, index) => (
            <div
              key={section.title}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div
                className={`timeline-content ${
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
    </section>
  );
}

export default About;
