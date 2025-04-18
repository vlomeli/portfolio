import { useRef } from "react";
import "./Profile-bubble.css";
import profilePic from "../../assets/pfp.JPG";

function ProfileBubble() {
  const bubbleRef = useRef(null);

  const handleMouseMove = (e) => {
    const bubble = bubbleRef.current;
    const { left, top, width, height } = bubble.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    bubble.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
  };

  const handleMouseLeave = () => {
    bubbleRef.current.style.transform = "translate(0, 0)";
  };

  return (
    <div
      className="profile-bubble"
      ref={bubbleRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={profilePic} alt="Profile" />
    </div>
  );
}

export default ProfileBubble;
