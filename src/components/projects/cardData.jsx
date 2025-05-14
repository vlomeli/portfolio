import journal from "../../assets/fs-journal.png";
import detailing from "../../assets/detailing.png";
import testingtool from "../../assets/testingtool.png";
import socialmedia from "../../assets/socialmedia.png";
import nestwork from "../../assets/nestwork.png";
import careerharvest from "../../assets/careerharvest.png";

export const TopProjectsData = [
  {
    img: careerharvest,
    title: "Career Harvest",
    description:
      "Contributed to an internal Digital Nest tool that web scrapes job listings based on the specific career paths interns choose to explore. Refactored the frontend for a cleaner, more user-friendly interface, and continue to maintain and enhance the platform by adding new features.",
    githubURL: "https://careerharvest.org/",
  },
  {
    img: socialmedia,
    title: "Full-stack Social Media",
    description:
      "During my time at BVT, my team and I developed a full-stack social media application using React, Bulma, MongoDB, and Express.js. This platform enables users to share text-based posts and express themselves, fostering engagement and interaction among the community.",
    githubURL: "https://github.com/vlomeli/ddsm-front-end",
  },
  {
    img: nestwork,
    title: "Nestwork",
    description:
      "Worked on an internal Digital Nest tool designed to streamline meeting scheduling with interns. As the intern pool continues to grow, this tool improves efficiency in managing organizational meetings. Contributed to implementing pairing functionality and enhancing the frontend for a smoother user experience.",
    githubURL: "https://bizznest.github.io/modesto-bizznest-scheduler/",
  },
];

export const CardData = [
  {
    img: detailing,
    title: "Freelance Detailing Website",
    description:
      "A local detailing company needed to expand their business online, so I created a website for them. Using HTML, JavaScript, and CSS, I developed a solution featuring EmailJS for quote requests and an embedded map to display their location. The website is hosted with a custom domain.",
    githubURL: "https://speedysmobiledetailing.net/",
  },
  {
    img: testingtool,
    title: "Python Testing Tool",
    description:
      "My team and I developed a Python testing tool designed to rigorously stress test our social media application's endpoints. Leveraging pytest for testing and faker for generating dummy data, this mini project aimed to cover a wide range of scenarios and edge cases, ensuring robust performance and reliability.",
    githubURL: "https://github.com/vlomeli/ddsm-backend-testing-tool",
  },
  {
    img: journal,
    title: "Full-stack Journal",
    description:
      "Crafted my inaugural full-stack endeavor: a journal equipped with mood tracking and an interactive calendar. Leveraging React, CSS, Express.js, and SQL, the goal was to put into practice all the skills I have acquired.",
    githubURL: "https://github.com/vlomeli/journal-frontend",
  },
];
