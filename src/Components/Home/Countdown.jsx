import styles from "./Countdown.module.css";
import halfSun from "../../assets/HalfSun.png";

// Countdown component displayed on the home page
// Shows the number of days left until the festival together with date and location information
function Countdown() {
  return (

    <section className={styles.countdown}>
      <div className={styles.text}>
        <h1>50</h1>
        <h2>DAYS LEFT</h2>

        <p>
          06 June 2026 <br />
          Randers Denmark
        </p>
      </div>

      <img className={styles.sun} src={halfSun} alt="" />
    </section>
  );
}

export default Countdown;