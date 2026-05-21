import { useNavigate } from "react-router-dom";
import styles from "./ProfileMenuCard.module.css";

import arrowWhite from "../../assets/arrow-white.png";

function ProfileMenuCard({ icon, title, text, link }) {

  // Allows navigation between pages inside the application
  const navigate = useNavigate();

  return (

    // Clickable card used for navigation
    <button
      className={styles.card}
      onClick={() => navigate(link)}
    >

      {/* Icon section displayed on the left side */}
      <span className={styles.iconCircle}>
        <img src={icon} alt="" />
      </span>

      {/* Text content section */}
      <span className={styles.content}>
        <strong>{title}</strong>
        <small>{text}</small>
      </span>

      {/* Arrow icon indicating navigation */}
      <img
        className={styles.arrow}
        src={arrowWhite}
        alt=""
      />
    </button>
  );
}

export default ProfileMenuCard;