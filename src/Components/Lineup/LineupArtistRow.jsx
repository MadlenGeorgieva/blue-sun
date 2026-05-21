import styles from "./LineupArtistRow.module.css";

import locationIcon from "../../assets/location-outline-dark.png";
import heartActive from "../../assets/heart-active.png";
import heartNotActive from "../../assets/heart-not-active.png";

// Reusable component displaying one artist in the lineup
function LineupArtistRow({ artist, isLast, isSaved, toggleSave }) {
  return (

    // Main row containing artist information and controls
    <div className={styles.row}>

      {/* Displays the artist performance time */}
      <p className={styles.time}>
        {artist.time}
      </p>

      {/* Timeline section with a dot and connecting line */}
      <div className={styles.timeline}>
        <span className={styles.dot}></span>

        {!isLast && (
          <span className={styles.line}></span>
        )}
      </div>

      {/* Artist image section */}
      <div className={styles.imgBox}>
        <img
          src={artist.image}
          alt={artist.name}
          className={styles.artistImg}
        />
      </div>

      {/* Artist information section */}
      <div className={styles.info}>
        <h2 className={styles.name}>
          {artist.name}
        </h2>

        <div className={styles.stageRow}>
          <img
            src={locationIcon}
            alt=""
            className={styles.locationIcon}
          />

          <span className={styles.stage}>
            {artist.stage}
          </span>
        </div>
      </div>

      {/* Heart button used for saving or removing artists from the schedule */}
      <button
        className={styles.heartButton}
        onClick={() => toggleSave(artist.name)}
        aria-label={isSaved ? "Remove from schedule" : "Save to schedule"}
      >
        <img
          src={isSaved ? heartActive : heartNotActive}
          alt=""
        />
      </button>
    </div>
  );
}

export default LineupArtistRow;