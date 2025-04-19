import "./intro.css";
import ProfileBubble from "../profile-bubble/profile-bubble";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import sql from "../../assets/sql.png";
import mongodb from "../../assets/mongodb.png";

function Intro() {
  return (
    <div className="intro">
      <ProfileBubble />
      <h1 className="name"> Victor Lomeli Ponce </h1>
      <h2> Full-Stack Web Developer</h2>
      <p className="text">
        {" "}
        I love to create things. I love to problem solve—which is why I love
        what I do. This website is a place where you can check out some of my
        projects, learn a bit about who I am, and find my contact info if you
        ever want to connect.{" "}
      </p>

      <div className="techstack">
        <h2>
          <span className="tech-icons">
            <img src={html} alt="html logo" className="tech-icon"></img>
            <img src={css} alt="css logo" className="tech-icon"></img>
            <img src={js} alt="js logo" className="tech-icon"></img>
            {/* <img src={python} alt="linkedin logo" className="tech-icon"></img> */}
            <img
                  src={react}
                  alt="react logo"
                  className="tech-icon"
                ></img>
            <img src={sql} alt="sql logo" className="tech-icon"></img>
            <img src={mongodb} alt="mongodb logo" className="tech-icon"></img>
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Intro;
