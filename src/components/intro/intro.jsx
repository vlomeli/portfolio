import "./intro.css";
import ProfileBubble from "../profile-bubble/profile-bubble";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import sql from "../../assets/sql.png";
import mongodb from "../../assets/mongodb.png";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

function Intro() {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-left">
        <ProfileBubble />
        <div className="techstack">
          <div className="tech-icons">
            {[html, css, js, react, sql, mongodb].map((icon, i) => (
              <motion.img
                key={i}
                src={icon}
                alt="tech"
                className="tech-icon"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="intro-right">
        <motion.h1
          className="name"
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
        >
          Victor Lomeli Ponce
        </motion.h1>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={textVariants}
          viewport={{ once: true }}
        >
          Full-Stack Web Developer
        </motion.h2>
        <motion.p
          className="text"
          initial="hidden"
          whileInView="visible"
          custom={2}
          variants={textVariants}
          viewport={{ once: true }}
        >
          I like making things, breaking things (sometimes), and figuring out
          how they work. I’m always trying to learn something new or build
          something better. This site’s where I keep my projects, share a bit
          about myself, and make it easy to reach out if you ever want to
          connect.
        </motion.p>
      </div>
    </section>
  );
}

export default Intro;
