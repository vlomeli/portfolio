import "./intro.css";
import ProfileBubble from "../profile-bubble/profile-bubble";

function Intro() {
  return (
    <div className="intro">
        <ProfileBubble />
      <h1 className="name"> Victor Lomeli Ponce </h1>
      <h3> Full-Stack Web Developer</h3>
      <p className="text">
        {" "}
        I love to create things. I love to problem solve—which is why I love
        what I do. This website is a place where you can check out some of my
        projects, learn a bit about who I am, and find my contact info if you
        ever want to connect.{" "}
      </p>
    </div>
  );
}

export default Intro;
