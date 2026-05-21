import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

import logo from "../assets/Logo.png";
import notificationIcon from "../assets/notification.png";
import profileIcon from "../assets/profile.png";

// Reusable header component displayed at the top of the application
// The header contains navigation buttons and the application logo
function Header({
  leftIcon = notificationIcon,
  rightIcon = profileIcon,
  onLeftClick,
  onRightClick,
}) {

  // Allows navigation between pages inside the application
  const navigate = useNavigate();

  // Handles the left button functionality
  // Uses a custom function if provided, otherwise navigates to notifications
  const handleLeftClick = () => {
    if (onLeftClick) {
      onLeftClick();
    } else {
      navigate("/notifications");
    }
  };

  // Handles the right button functionality
  // Uses a custom function if provided, otherwise navigates to the profile page
  const handleRightClick = () => {
    if (onRightClick) {
      onRightClick();
    } else {
      navigate("/profile");
    }
  };

  // Navigates to the home page when the logo is clicked
  const handleLogoClick = () => {
    navigate("/home");
  };

  return (

    // Main header container
    <header className={styles.header}>

      {/* Left navigation button */}
      <button
        className={styles.iconButton}
        onClick={handleLeftClick}
      >
        <img src={leftIcon} alt="" />
      </button>

      {/* Center logo button */}
      <button
        className={styles.logoButton}
        onClick={handleLogoClick}
      >
        <img
          className={styles.logo}
          src={logo}
          alt="Blå Sol"
        />
      </button>

      {/* Right navigation button */}
      <button
        className={styles.iconButton}
        onClick={handleRightClick}
      >
        <img src={rightIcon} alt="" />
      </button>
    </header>
  );
}

export default Header;