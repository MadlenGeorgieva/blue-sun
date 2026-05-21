import styles from "./ScheduleHeader.module.css";
import musicListIcon from "../../assets/musiclist-white.png";

function ScheduleHeader() {
  return (
    <>
      <div className={styles.savedFrom}>
        <img src={musicListIcon} alt="" className={styles.savedIcon} />
        <span>Saved from lineup</span>
      </div>

      <div className={styles.nowRow}>
        <span className={styles.nowBadge}>Now</span>
        <div className={styles.nowLine}></div>
      </div>
    </>
  );
}

export default ScheduleHeader;