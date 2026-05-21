import { useEffect } from "react";
import styles from "./Toast.module.css";
import logoImg from "../../assets/Logo.png";
import BlaSolDarkImg from "../../assets/BlaSolDark.png";

// Toast component to display a message with an auto-dismiss feature
// The toast will automatically disappear after 4 seconds, and it includes a logo for branding purposes
// This is a pop up message that appears temporarily to inform users about certain actions or events in the app, such as
//  successful form submissions, errors, or other notifications

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={styles.toast}>
      <img src={BlaSolDarkImg} alt="Blå Sol" className={styles.logo} />
      <div className={styles.text}>
        <h3 className={styles.title}>Blå Sol</h3>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
}

export default Toast;