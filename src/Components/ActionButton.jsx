import { Link } from "react-router-dom";

import styles from "./ActionButton.module.css";
import arrow from "../assets/arrow.png";

function ActionButton({ icon, text, link }) {
  const content = (
    <>
      <span className={styles.iconBox}>
        <img src={icon} alt="" />
      </span>

      <span className={styles.text}>{text}</span>

      <img className={styles.arrow} src={arrow} alt="" />
    </>
  );

  if (link) {
    return (
      <Link to={link} className={styles.actionButton}>
        {content}
      </Link>
    );
  }

  return <button className={styles.actionButton}>{content}</button>;
}

export default ActionButton;