import { Link } from "react-router-dom";

import styles from "./ActionButton.module.css";
import arrow from "../assets/arrow.png";

// Reusable action button component used throughout the application
// The button can either navigate to another page or behave as a normal button
function ActionButton({ icon, text, link }) {

  // Shared button content used for both button variations
  const content = (
    <>
      <span className={styles.iconBox}>
        <img src={icon} alt="" />
      </span>

      <span className={styles.text}>
        {text}
      </span>

      <img
        className={styles.arrow}
        src={arrow}
        alt=""
      />
    </>
  );

  // Renders a Link component when a navigation link is provided
  if (link) {
    return (
      <Link
        to={link}
        className={styles.actionButton}
      >
        {content}
      </Link>
    );
  }

  // Renders a normal button when no navigation link is provided
  return (
    <button className={styles.actionButton}>
      {content}
    </button>
  );
}

export default ActionButton;