import styles from "./Countdown.module.css";
import halfSun from "../../assets/HalfSun.png";

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