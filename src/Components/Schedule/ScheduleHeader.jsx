import styles from "./ScheduleHeader.module.css";
import musicListIcon from "../../assets/musiclist-white.png";

// Header component displayed on the schedule page
// Shows information about saved artists and the current timeline section
function ScheduleHeader() {
  return (
    <>

      {/* Section showing that artists are saved from the lineup */}
      <div className={styles.savedFrom}>
        <img
          src={musicListIcon}
          alt=""
          className={styles.savedIcon}
        />

        <span>
          Saved from lineup
        </span>
      </div>

      {/* Timeline header showing the current moment in the schedule */}
      <div className={styles.nowRow}>
        <span className={styles.nowBadge}>
          Now
        </span>

        <div className={styles.nowLine}></div>
      </div>
    </>
  );
}

export default ScheduleHeader;