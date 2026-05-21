import { useNavigate } from "react-router-dom";

import styles from "./ScheduleAddButton.module.css";

import musicListIcon from "../../assets/musiclist-white.png";
import plusIcon from "../../assets/plusIcon.png";

function ScheduleAddButton() {
  const navigate = useNavigate();

  return (
    <button
      className={styles.addButton}
      onClick={() => navigate("/lineup")}
    >
      <img
        src={musicListIcon}
        alt=""
        className={styles.addIcon}
      />

      <span>Add more artists</span>

      <img
        src={plusIcon}
        alt=""
        className={styles.plusIcon}
      />
    </button>
  );
}

export default ScheduleAddButton;