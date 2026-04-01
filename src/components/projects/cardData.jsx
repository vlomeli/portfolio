import journal from "../../assets/meejournal.png";
import detailing from "../../assets/detailing.png";
import testingtool from "../../assets/testingtool.png";
import socialmedia from "../../assets/socialmedia.png";
import nestwork from "../../assets/nestwork.png";
import careerharvest from "../../assets/careerharvest.png";
import cloneguard from "../../assets/cloneguard.png";

export const CardData = [
  {
    img: cloneguard,
    title: "CloneGuard",
    description:
      "A Python-based CLI tool that leverages the GitHub API to ingest and scan repository URLs for security vulnerabilities using static analysis, heuristic pattern matching, and automated code inspection, with development accelerated using OpenAI Codex. It generates structured vulnerability reports that are pipelined into Claude for summarization and enables interactive, context-aware querying directly within the terminal. The system also integrates ElevenLabs for real-time voice synthesis, delivering a conversational security assistant experience and earning the team a “Best Use of ElevenLabs” award at a hackathon.",
    githubURL: "https://github.com/vlomeli/cloneguard",
  },
  {
    img: journal,
    title: "MeeJournal",
    description:
      "A full-stack journaling application implemented as a React single-page frontend (React Router, modal-based editing) communicating with a Node.js/Express REST API backed by MySQL. It supports user registration/login with hashed passwords and JWT-based sessions, then provides authenticated CRUD workflows for journal entries, with built-in search and calendar-based navigation for quickly locating entries by date. Entries include mood tags (e.g., Happy/Neutral/Sad) designed to support a future AI insights layer that analyzes trends to surface recurring themes and possible mood drivers.",
    githubURL: "https://github.com/vlomeli/journal-frontend",
  },
  {
    img: nestwork,
    title: "Nestwork",
    description:
      "Worked on an internal Digital Nest tool designed to streamline meeting scheduling with interns. As the intern pool continues to grow, this tool improves efficiency in managing organizational meetings. Contributed to implementing pairing functionality and enhancing the frontend for a smoother user experience.",
    githubURL: "https://bizznest.github.io/modesto-bizznest-scheduler/",
  },
  {
    img: detailing,
    title: "Speedy's Mobile Detailing",
    description:
      "A local detailing company needed to expand their business online, so I created a website for them. Using HTML, JavaScript, and CSS, I developed a solution featuring EmailJS for quote requests and an embedded map to display their location. The website is hosted with a custom domain.",
    githubURL: "https://speedysmobiledetailing.net/",
  },
  {
    img: socialmedia,
    title: "DuckPond",
    description:
      "During my time at BVT, my team and I developed a full-stack social media application using React, Bulma, MongoDB, and Express.js. This platform enables users to share text-based posts and express themselves, fostering engagement and interaction among the community.",
    githubURL: "https://github.com/vlomeli/ddsm-front-end",
  },
  {
    img: testingtool,
    title: "DuckPond Testing Tool",
    description:
      "My team and I developed a Python testing tool designed to rigorously stress test our social media application's endpoints. Leveraging pytest for testing and faker for generating dummy data, this mini project aimed to cover a wide range of scenarios and edge cases, ensuring robust performance and reliability.",
    githubURL: "https://github.com/vlomeli/ddsm-backend-testing-tool",
  },
  {
    img: careerharvest,
    title: "Career Harvest",
    description:
      "Contributed to an internal Digital Nest tool that web scrapes job listings based on the specific career paths interns choose to explore. Refactored the frontend for a cleaner, more user-friendly interface, and continue to maintain and enhance the platform by adding new features.",
    githubURL: "https://github.com/REPLACE_ME",
  },
];
