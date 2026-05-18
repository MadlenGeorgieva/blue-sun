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

  const handleLeftClick = () => {
    if (onLeftClick) {
      onLeftClick();
    } else {
      navigate("/notifications");
    }
  };

  const handleRightClick = () => {
    if (onRightClick) {
      onRightClick();
    } else {
      navigate("/profile");
    }
  };

  return (
    <header className={styles.header}>
      <button className={styles.iconButton} onClick={handleLeftClick}>
        <img src={leftIcon} alt="" />
      </button>

      <img className={styles.logo} src={logo} alt="Blå Sol" />

      <button className={styles.iconButton} onClick={handleRightClick}>
        <img src={rightIcon} alt="" />
      </button>
    </header>
  );
}

export default Header;