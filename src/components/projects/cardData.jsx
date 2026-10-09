import journal from "../../assets/meejournal.png";
import detailing from "../../assets/detailing.png";
import testingtool from "../../assets/testingtool.png";
import socialmedia from "../../assets/socialmedia.png";
import nestwork from "../../assets/nestwork.png";
import careerharvest from "../../assets/careerharvest.png";
import cloneguard from "../../assets/cloneguard.png";
import rotorheads from "../../assets/rotorheads.png";
import simplicateLogin from "../../assets/simplicate-leads-login.png";
import simplicateWorkspace from "../../assets/simplicate-leads-workspace.png";
import simplicateResults from "../../assets/simplicate-leads-results.png";
import simplicateHistory from "../../assets/simplicate-leads-history.png";
import salinasSportsHallHero from "../../assets/salinas-sports-hall-hero.png";
import salinasSportsHallCeremony from "../../assets/salinas-sports-hall-ceremony.png";
import salinasSportsHallContact from "../../assets/salinas-sports-hall-contact.png";
import salinasSportsHallInductees from "../../assets/salinas-sports-hall-inductees.png";
import salinasSportsHallFooter from "../../assets/salinas-sports-hall-footer.png";

export const CardData = [
  {
    images: [
      simplicateLogin,
      simplicateWorkspace,
      simplicateResults,
      simplicateHistory,
    ],
    title: "Simplicate Leads",
    description:
      "Overview: A private lead-discovery and outreach tool for finding relevant local businesses and exporting outreach-ready CSV lists for personalized campaigns. Contribution: Built its React and Node.js/Express application with Supabase access controls, Google Places discovery, public-email discovery, duplicate prevention, usage safeguards, and CSV exports.",
    codeURL: "https://github.com/vlomeli/simplicate-lead-generator",
    stack: ["React","Express.js", "Node.js", "PostgresSQL", "Google Places", "Node.js", "Express.js", "Render", "CSS", "Fetching", "API", "Rest API"],
  },
  {
    images: [cloneguard],
    title: "CloneGuard",
    description:
      "Overview: A Python CLI that scans GitHub repositories for security vulnerabilities and delivers structured findings in the terminal. Contribution: Built the GitHub API, static-analysis, reporting, Claude summarization, and ElevenLabs voice workflow that earned the team a Best Use of ElevenLabs hackathon award.",
    codeURL: "https://github.com/vlomeli/cloneguard",
    stack: ["Python", "GitHub API", "Static analysis", "ElevenLabs", "Gemini", "Cyber Security"],
  },
  {
    images: [
      salinasSportsHallHero,
      salinasSportsHallCeremony,
      salinasSportsHallContact,
      salinasSportsHallInductees,
      salinasSportsHallFooter,
    ],
    title: "Salinas Valley Sports Hall of Fame",
    description:
      "Overview: A live WordPress site celebrating Salinas Valley athletes, coaches, and community members. Contribution: Created reusable Elementor components, maintained content and media, improved responsive HTML and CSS, reviewed updates with Yoast SEO, configured Stripe payments, and set up campaign metadata to support analytics tracking.",
    liveURL: "https://salinasvalleysportshalloffame.com/",
    stack: ["Wordpress", "Elementor", "Yoast SEO", "CSS", "Javascript", "Components", "Content management"],
  },
  {
    images: [journal],
    title: "N0T3D",
    description:
      "Overview: A full-stack journaling application for creating, searching, and navigating personal entries. Contribution: Built the React and Node.js/Express application with MySQL, hashed-password and JWT authentication, authenticated CRUD flows, calendar navigation, search, and mood tags.",
    codeURL: "https://github.com/vlomeli/journal-frontend",
    stack: ["React", "Express.js", "Node.js", "CSS", "MySQL", "JWT", "Authentication", "Rest API"],
  },
  {
    images: [nestwork],
    title: "Nestwork",
    description:
      "Overview: An internal Digital Nest tool that streamlines meeting scheduling for roughly 55 interns across locations. Contribution: Implemented pairing functionality and enhanced the frontend, reducing manual scheduling effort by approximately 40%.",
    liveURL: "https://bizznest.github.io/modesto-bizznest-scheduler/",
    stack: ["JavaScript", "CSS", "Scheduling", "Frontend", "Json Data"],
  },
  {
    images: [rotorheads],
    title: "Rotorheads",
    description:
      "Overview: A WordPress website for Rotorhead Partners that showcases leadership and team-building workshops designed to build trust, presence, and alignment. Contribution: Implemented all workshop pages, custom-coded the workshop dropdown navigation, resolved site-wide CSS conflicts, and helped deliver responsive production builds with the design team.",
    liveURL: "https://rotorheadpartners.us/",
    stack: ["WordPress", "Spectra One", "Yoast SEO", "JavaScript", "CSS", "Components"],
  },
  {
    images: [detailing],
    title: "Speedy's Mobile Detailing",
    description:
      "Overview: A custom-domain website that helps a local detailing company build its online presence. Contribution: Built the HTML, CSS, and JavaScript site with EmailJS quote requests and an embedded location map.",
    liveURL: "https://speedysmobiledetailing.net/",
    stack: ["HTML", "CSS", "JavaScript", "EmailJS"],
  },
  {
    images: [socialmedia],
    title: "DuckPond",
    description:
      "Overview: A full-stack social media application where users share text-based posts and engage with a community. Contribution: Collaborated with my Bay Valley Tech team to develop the React, Bulma, MongoDB, and Express.js application, supporting community interaction.",
    codeURL: "https://github.com/vlomeli/ddsm-front-end",
    stack: ["React", "Express.js", "MongoDB", "Bulma", "CSS", "Rest API", "Fetching"],
  },
  {
    images: [testingtool],
    title: "DuckPond Testing Tool",
    description:
      "Overview: A Python stress-testing tool for validating social media application endpoints across edge cases. Contribution: Collaborated with my team to use pytest and Faker for synthetic-data generation and endpoint testing, helping improve application reliability.",
    codeURL: "https://github.com/vlomeli/ddsm-backend-testing-tool",
    stack: ["Python", "pytest", "Faker"],
  },
  {
    images: [careerharvest],
    title: "Career Harvest",
    description:
      "Overview: An internal Digital Nest tool that gathers job listings for interns' chosen career paths. Contribution: Refactored the frontend for a cleaner, more user-friendly experience and continue to maintain it with new features that enhance content discovery.",
    codeURL: "",
    stack: ["Web scraping", "React", "Internal tool", "React", "CSS", "Components"],
  },
  {
    images: [],
    title: "Phishing Campaign",
    description:
      "Overview: A two-campaign phishing-awareness initiative designed to help staff recognize suspicious links. Contribution: Planned and deployed GoPhish on a DigitalOcean VM, configured simulated email delivery and employee data, and created a training landing page that reduced link clicks from 45 of 91 people to 10 of 91—a 78% reduction.",
    stack: ["GoPhish", "Security awareness", "SMTP", "Port", "Google App passwords", "Analytics", "Phising"],
  },
];
