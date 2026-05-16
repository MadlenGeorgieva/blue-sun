import { useNavigate } from "react-router-dom";
import styles from "./PageTitle.module.css";

import backBlue from "../assets/back-blue.png";

function PageTitle({ title }) {
  const navigate = useNavigate();

  return (
    <div className={styles.titleRow}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <img src={backBlue} alt="Back" />
      </button>

      <h1>{title}</h1>
    </div>
  );
}

export default PageTitle;