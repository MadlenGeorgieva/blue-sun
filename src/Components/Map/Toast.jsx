import { useEffect } from "react";
import styles from "./Toast.module.css";
import logoImg from "../../assets/Logo.png";
import BlaSolDarkImg from "../../assets/BlaSolDark.png";

// Toast notification component used for temporary messages in the application
// The notification automatically disappears after 4 seconds
function Toast({ message, onClose }) {

  // Starts a timer when the component appears
  // The toast closes automatically after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (

    // Main toast container with branding and message content
    <div className={styles.toast}>
      <img
        src={BlaSolDarkImg}
        alt="Blå Sol"
        className={styles.logo}
      />

      <div className={styles.text}>
        <h3 className={styles.title}>
          Blå Sol
        </h3>

        <p className={styles.message}>
          {message}
        </p>
      </div>
    </div>
  );
}

export default Toast;