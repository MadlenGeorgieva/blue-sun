import styles from "./Header.module.css";

import notification from "../assets/notification.png";
import logo from "../assets/Logo.png";
import profile from "../assets/profile.png";

function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.iconButton}>
        <img src={notification} alt="Notifications" />
      </button>

      <img className={styles.logo} src={logo} alt="Blå Sol" />

      <button className={styles.iconButton}>
        <img src={profile} alt="Profile" />
      </button>
    </header>
  );
}

export default Header;