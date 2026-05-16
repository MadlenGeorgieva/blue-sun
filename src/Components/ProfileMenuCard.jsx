import { useNavigate } from "react-router-dom";
import styles from "./ProfileMenuCard.module.css";

import arrowDark from "../assets/arrow-white.png";

function ProfileMenuCard({ icon, title, text, link }) {
  const navigate = useNavigate();

  return (
    <button className={styles.card} onClick={() => navigate(link)}>
      <span className={styles.iconCircle}>
        <img src={icon} alt="" />
      </span>

      <span className={styles.content}>
        <strong>{title}</strong>
        <small>{text}</small>
      </span>

      <img className={styles.arrow} src={arrowDark} alt="" />
    </button>
  );
}

export default ProfileMenuCard;