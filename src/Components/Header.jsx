import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

import logo from "../assets/Logo.png";
import notificationIcon from "../assets/notification.png";
import profileIcon from "../assets/profile.png";

function Header({
  leftIcon = notificationIcon,
  rightIcon = profileIcon,
  onLeftClick,
  onRightClick,
}) {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <button
        className={styles.iconButton}
        onClick={onLeftClick}
      >
        <img src={leftIcon} alt="" />
      </button>

      <img className={styles.logo} src={logo} alt="Blå Sol" />

      <button
        className={styles.iconButton}
        onClick={onRightClick}
      >
        <img src={rightIcon} alt="" />
      </button>
    </header>
  );
}

export default Header;