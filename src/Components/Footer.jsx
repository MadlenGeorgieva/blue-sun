import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

import homeIcon from "../assets/HomeSun.png";
import lineupIcon from "../assets/musiclist-light.png";
import scheduleIcon from "../assets/schedule-light.png";
import mapIcon from "../assets/map-light.png";
import friendsIcon from "../assets/friends-light.png";

// Provides quick access to the main pages in the app
function Footer() {
  return (

    // Main footer container holding all navigation links
    <footer className={styles.footer}>

      {/* Navigation links displayed inside the footer */}
      <Link to="/home" className={styles.item}>
        <img src={homeIcon} alt="" />
        <span>Home</span>
      </Link>

      <Link to="/lineup" className={styles.item}>
        <img src={lineupIcon} alt="" />
        <span>Lineup</span>
      </Link>

      <Link to="/schedule" className={styles.item}>
        <img src={scheduleIcon} alt="" />
        <span>Schedule</span>
      </Link>

      <Link to="/map" className={styles.item}>
        <img src={mapIcon} alt="" />
        <span>Map</span>
      </Link>

      <Link to="/friends" className={styles.item}>
        <img src={friendsIcon} alt="" />
        <span>Friends</span>
      </Link>
    </footer>
  );
}

export default Footer;