import styles from "./FriendsLocationBanner.module.css";

import mapIcon from "../../assets/map.png";
import halfSun from "../../assets/HalfSun.png";

// Component that displays information about friends sharing their location
// The banner gives the user quick access to the map feature
function FriendsLocationBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.text}>

        {/* Main text showing active location sharing */}
        <p className={styles.main}>
          <span className={styles.greenDot}></span>
          2 friends sharing location
        </p>

        <p className={styles.small}>
          Tap a friend to view on map
        </p>
      </div>

      <div className={styles.visuals}>
        <img
          className={styles.map}
          src={mapIcon}
          alt=""
        />

        <img
          className={styles.sun}
          src={halfSun}
          alt=""
        />
      </div>
    </div>
  );
}

export default FriendsLocationBanner;