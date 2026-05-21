import { useNavigate } from "react-router-dom";
import styles from "./Start.module.css";

import welcomeSun from "../assets/BlaSolDark.png";
import arrow from "../assets/arrow.png";

// Displays the welcome screen and navigates the user
// to the loading page when the start button is pressed
function Start() {

  // Allows navigation between pages inside the application
  const navigate = useNavigate();

  return (

    <section className={styles.page}>

      <h1>
        WELCOME TO
      </h1>

      <img
        className={styles.sunImage}
        src={welcomeSun}
        alt="Blå Sol"
      />

      {/* Start button used for navigating to the loading page */}
      <button
        className={styles.startButton}
        onClick={() => navigate("/loading")}
      >
        <span>
          START
        </span>

        <img src={arrow} alt="" />
      </button>
    </section>
  );
}

export default Start;