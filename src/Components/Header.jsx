import { useNavigate } from "react-router-dom";

import styles from "./Header.module.css";

import notification from "../assets/notification.png";
import logo from "../assets/Logo.png";
import profile from "../assets/profile.png";

function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <button
        className={styles.iconButton}
        onClick={() => navigate("/notifications")}
      >
        <img src={notification} alt="Notifications" />
      </button>

      <img
        className={styles.logo}
        src={logo}
        alt="Blå Sol"
        onClick={() => navigate("/")}
      />

      <button
        className={styles.iconButton}
        onClick={() => navigate("/profile")}
      >
        <img src={profile} alt="Profile" />
      </button>
    </header>
  );
}

export default Header;