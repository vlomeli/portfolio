import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef} from "react";
import "./profile-bubble.css";
import profilePic from "../../assets/pfp.JPG";


function ProfileBlob({
    imageUrl = profilePic,
    altText = "Profile Picture",
    width = 300,
    height = 300,
  }) {
    const blobRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
  
    const x = useSpring(mouseX, {
      stiffness: 80,
      damping: 12,
      restSpeed: 0.99,
    });
  
    const y = useSpring(mouseY, {
      stiffness: 80,
      damping: 12,
      restSpeed: 0.99,
    });
  
    useEffect(() => {
      const updateMouse = (e) => {
        if (!blobRef.current) return;
  
        const rect = blobRef.current.getBoundingClientRect();
        const xOffset = e.clientX - (rect.left + rect.width / 2);
        const yOffset = e.clientY - (rect.top + rect.height / 2);
  
        const distanceFactor = Math.min(
          Math.sqrt(xOffset ** 2 + yOffset ** 2) / 100,
          1
        );
  
        mouseX.set(xOffset * 0.15 * distanceFactor);
        mouseY.set(yOffset * 0.15 * distanceFactor);
      };
  
      const resetMouse = () => {
        mouseX.set(0);
        mouseY.set(0);
      };
  
      const el = blobRef.current;
      el?.addEventListener("mousemove", updateMouse);
      el?.addEventListener("mouseleave", resetMouse);
  
      return () => {
        el?.removeEventListener("mousemove", updateMouse);
        el?.removeEventListener("mouseleave", resetMouse);
      };
    }, [mouseX, mouseY]);
  
    return (
      <motion.div
        ref={blobRef}
        className="profile-blob"
        style={{
          width,
          height,
          x,
          y,
          borderRadius: "50%",
        }}
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <img src={imageUrl} alt={altText} />
      </motion.div>
    );
  }
  
  export default ProfileBlob;