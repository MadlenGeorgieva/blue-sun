import { useNavigate } from "react-router-dom";
import styles from "./PageTitle.module.css";

import backBlue from "../assets/back-blue.png";

// Reusable page title component displayed at the top of pages
// Includes a back button and the current page title
function PageTitle({ title }) {

  // Allows navigation between pages inside the application
  const navigate = useNavigate();

  return (

    // Title section containing the back button and page title
    <div className={styles.titleRow}>

      {/* Back button used for navigating to the home page */}
      <button
        className={styles.backButton}
        onClick={() => navigate("/home")}
      >
        <img
          src={backBlue}
          alt="Back"
        />
      </button>

      {/* Displays the current page title */}
      <h1>{title}</h1>
    </div>
  );
}

export default PageTitle;