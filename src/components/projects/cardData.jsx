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
      "A private lead-discovery and outreach tool built for Simplicate, a review-management company. It helps the team search for relevant local businesses, collect essential business details, identify publicly available contact emails when possible, and export outreach-ready CSV lists for personalized email campaigns. The application uses a React frontend and Node.js/Express backend, with Supabase for authentication, secure user access, and temporary job storage. Google Places powers live business discovery, while a backend email-discovery workflow checks public website pages for visible contact emails. The project includes duplicate prevention through permanent Place ID tracking, configurable daily and monthly API safeguards, per-user rate limits, fixture mode for cost-free development, and downloadable full-result and outreach-only CSV exports.",
    codeURL: "https://github.com/vlomeli/simplicate-lead-generator",
    stack: ["React", "Node.js", "Express", "Supabase", "Google Places"],
  },
  {
    images: [cloneguard],
    title: "CloneGuard",
    description:
      "A Python-based CLI tool that leverages the GitHub API to ingest and scan repository URLs for security vulnerabilities using static analysis, heuristic pattern matching, and automated code inspection, with development accelerated using OpenAI Codex. It generates structured vulnerability reports that are pipelined into Claude for summarization and enables interactive, context-aware querying directly within the terminal. The system also integrates ElevenLabs for real-time voice synthesis, delivering a conversational security assistant experience and earning the team a “Best Use of ElevenLabs” award at a hackathon.",
    codeURL: "https://github.com/vlomeli/cloneguard",
    stack: ["Python", "GitHub API", "Static analysis", "ElevenLabs"],
  },
  {
    images: [journal],
    title: "N0T3D",
    description:
      "A full-stack journaling application implemented as a React single-page frontend (React Router, modal-based editing) communicating with a Node.js/Express REST API backed by MySQL. It supports user registration/login with hashed passwords and JWT-based sessions, then provides authenticated CRUD workflows for journal entries, with built-in search and calendar-based navigation for quickly locating entries by date. Entries include mood tags (e.g., Happy/Neutral/Sad) designed to support a future AI insights layer that analyzes trends to surface recurring themes and possible mood drivers.",
    codeURL: "https://github.com/vlomeli/journal-frontend",
    stack: ["React", "Express", "MySQL", "JWT"],
  },
  {
    images: [nestwork],
    title: "Nestwork",
    description:
      "Worked on an internal Digital Nest tool designed to streamline meeting scheduling with interns. As the intern pool continues to grow, this tool improves efficiency in managing organizational meetings. Contributed to implementing pairing functionality and enhancing the frontend for a smoother user experience.",
    liveURL: "https://bizznest.github.io/modesto-bizznest-scheduler/",
    stack: ["JavaScript", "Scheduling", "Frontend"],
  },
  {
    images: [rotorheads],
    title: "Rotorheads",
    description:
      "A WordPress-based website built for Rotorhead Partners, a leadership and team-building workshop company led by a Google program partnership lead, designed to showcase custom facilitation programs that help teams build trust, presence, and alignment through structured play. Working alongside a design team, I implemented all workshop pages, custom-coded the workshops dropdown navigation, corrected CSS conflicts site-wide, and assisted the team in resolving layout inconsistencies, all translated into responsive, production-ready builds using WordPress, Elementor, Spectra One, custom JavaScript, and CSS.",
    liveURL: "https://rotorheadpartners.us/",
    stack: ["WordPress", "Elementor", "JavaScript", "CSS"],
  },
  {
    images: [detailing],
    title: "Speedy's Mobile Detailing",
    description:
      "A local detailing company needed to expand their business online, so I created a website for them. Using HTML, JavaScript, and CSS, I developed a solution featuring EmailJS for quote requests and an embedded map to display their location. The website is hosted with a custom domain.",
    liveURL: "https://speedysmobiledetailing.net/",
    stack: ["HTML", "CSS", "JavaScript", "EmailJS"],
  },
  {
    images: [socialmedia],
    title: "DuckPond",
    description:
      "During my time at BVT, my team and I developed a full-stack social media application using React, Bulma, MongoDB, and Express.js. This platform enables users to share text-based posts and express themselves, fostering engagement and interaction among the community.",
    codeURL: "https://github.com/vlomeli/ddsm-front-end",
    stack: ["React", "Express", "MongoDB", "Bulma"],
  },
  {
    images: [testingtool],
    title: "DuckPond Testing Tool",
    description:
      "My team and I developed a Python testing tool designed to rigorously stress test our social media application's endpoints. Leveraging pytest for testing and faker for generating dummy data, this mini project aimed to cover a wide range of scenarios and edge cases, ensuring robust performance and reliability.",
    codeURL: "https://github.com/vlomeli/ddsm-backend-testing-tool",
    stack: ["Python", "pytest", "Faker"],
  },
  {
    images: [careerharvest],
    title: "Career Harvest",
    description:
      "Contributed to an internal Digital Nest tool that web scrapes job listings based on the specific career paths interns choose to explore. Refactored the frontend for a cleaner, more user-friendly interface, and continue to maintain and enhance the platform by adding new features.",
    codeURL: "",
    stack: ["Web scraping", "React", "Internal tool"],
  },
  {
    images: [],
    title: "Phishing Campaign",
    description:
      "Project details are being prepared. Add a screenshot, project description, stack, and link when this work is ready to share.",
    stack: ["GoPhish", "Security awareness"],
  },
];
