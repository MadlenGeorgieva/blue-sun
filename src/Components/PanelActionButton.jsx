import { Link } from "react-router-dom";

import styles from "./PanelActionButton.module.css";
import plusIcon from "../assets/plusIcon.png";

function PanelActionButton({ text, icon, link, external }) {
  const content = (
    <>
      {icon && <img className={styles.leftIcon} src={icon} alt="" />}
      <span>{text}</span>
      <img src={plusIcon} alt="" className={styles.plusIcon} />
    </>
  );

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

  return (
    <Link className={styles.button} to={link}>
      {content}
    </Link>
  );
}

export default PanelActionButton;