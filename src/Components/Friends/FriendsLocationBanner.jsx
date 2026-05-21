import styles from "./FriendsLocationBanner.module.css";

import mapIcon from "../../assets/map.png";
import halfSun from "../../assets/HalfSun.png";

function FriendsLocationBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.text}>
        <p className={styles.main}>
          <span className={styles.greenDot}></span>
          2 friends sharing location
        </p>

        <p className={styles.small}>Tap a friend to view on map</p>
      </div>

      <div className={styles.visuals}>
        <img className={styles.map} src={mapIcon} alt="" />
        <img className={styles.sun} src={halfSun} alt="" />
      </div>
    </div>
  );
}

export default FriendsLocationBanner;