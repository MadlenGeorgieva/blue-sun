import styles from "./Footer.module.css";

import homeIcon from "../assets/HomeSun.png";
import lineupIcon from "../assets/musiclist-light.png";
import scheduleIcon from "../assets/schedule-light.png";
import mapIcon from "../assets/map-light.png";
import friendsIcon from "../assets/friends-light.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <button className={styles.item}>
        <img src={homeIcon} alt="" />
        <span>Home</span>
      </button>

      <button className={styles.item}>
        <img src={lineupIcon} alt="" />
        <span>Lineup</span>
      </button>

      <button className={styles.item}>
        <img src={scheduleIcon} alt="" />
        <span>Schedule</span>
      </button>

      <button className={styles.item}>
        <img src={mapIcon} alt="" />
        <span>Map</span>
      </button>

      <button className={styles.item}>
        <img src={friendsIcon} alt="" />
        <span>Friends</span>
      </button>
    </footer>
  );
}

export default Footer;  