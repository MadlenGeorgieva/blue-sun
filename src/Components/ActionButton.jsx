import styles from "./ActionButton.module.css";
import arrow from "../assets/back white.png";

function ActionButton({ icon, text }) {
  return (
    <button className={styles.actionButton}>
      <span className={styles.iconBox}>
        <img src={icon} alt="" />
      </span>

      <span className={styles.text}>{text}</span>

      <img className={styles.arrow} src={arrow} alt="" />
    </button>
  );
}

export default ActionButton;