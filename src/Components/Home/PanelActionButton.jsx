// Imports the Link component from React Router for internal navigation
import { Link } from "react-router-dom";

// Imports the CSS styles and icon used in the button component
import styles from "./PanelActionButton.module.css";
import plusIcon from "../../assets/plusIcon.png";

// Reusable action button component used below the festival tabs
// The button can navigate either internally within the app or externally to another website
function PanelActionButton({ text, icon, link, external }) {

  // Shared button content used for both internal and external links
  const content = (
    <>
      {icon && <img className={styles.leftIcon} src={icon} alt="" />}
      <span>{text}</span>
      <img src={plusIcon} alt="" className={styles.plusIcon} />
    </>
  );

  // Renders a normal anchor tag when the link points to an !!! external website !!!
  if (external) {
    return (
      <a
        className={styles.button}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  // Renders a React Router Link for !!! internal !!! navigation inside the application
  return (
    <Link className={styles.button} to={link}>
      {content}
    </Link>
  );
}

export default PanelActionButton;