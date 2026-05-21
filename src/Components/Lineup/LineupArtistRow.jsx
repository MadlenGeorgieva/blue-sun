import styles from "./LineupArtistRow.module.css";

import locationIcon from "../../assets/location-outline-dark.png";
import heartActive from "../../assets/heart-active.png";
import heartNotActive from "../../assets/heart-not-active.png";

function LineupArtistRow({ artist, isLast, isSaved, toggleSave }) {
  return (
    <div className={styles.row}>
      <p className={styles.time}>{artist.time}</p>

      <div className={styles.timeline}>
        <span className={styles.dot}></span>
        {!isLast && <span className={styles.line}></span>}
      </div>

      <div className={styles.imgBox}>
        <img src={artist.image} alt={artist.name} className={styles.artistImg} />
      </div>

      <div className={styles.info}>
        <h2 className={styles.name}>{artist.name}</h2>

        <div className={styles.stageRow}>
          <img src={locationIcon} alt="" className={styles.locationIcon} />
          <span className={styles.stage}>{artist.stage}</span>
        </div>
      </div>

      <button
        className={styles.heartButton}
        onClick={() => toggleSave(artist.name)}
        aria-label={isSaved ? "Remove from schedule" : "Save to schedule"}
      >
        <img src={isSaved ? heartActive : heartNotActive} alt="" />
      </button>
    </div>
  );
}

export default LineupArtistRow;