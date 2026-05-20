import { useNavigate } from "react-router-dom";
import styles from "./Start.module.css";

import welcomeSun from "../assets/BlaSolDark.png";
import arrow from "../assets/arrow.png";

function Start() {
  const navigate = useNavigate();

  return (
    <section className={styles.page}>
      <h1>WELCOME TO</h1>

      <img className={styles.sunImage} src={welcomeSun} alt="Blå Sol" />

      <button className={styles.startButton} onClick={() => navigate("/loading")}>
        <span>START</span>
        <img src={arrow} alt="" />
      </button>
    </section>
  );
}

export default Start;