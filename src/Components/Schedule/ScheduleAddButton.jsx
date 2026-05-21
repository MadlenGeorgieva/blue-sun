import { useNavigate } from "react-router-dom";

import styles from "./ScheduleAddButton.module.css";

import musicListIcon from "../../assets/musiclist-white.png";
import plusIcon from "../../assets/plusIcon.png";

// Navigates the user to the lineup page for adding more artists
function ScheduleAddButton() {

  // Allows navigation between pages inside the application
  const navigate = useNavigate();

  return (

    // Button section used for navigating to the lineup page
    <button
      className={styles.addButton}
      onClick={() => navigate("/lineup")}
    >
      <img
        src={musicListIcon}
        alt=""
        className={styles.addIcon}
      />

      <span>
        Add more artists
      </span>

      <img
        src={plusIcon}
        alt=""
        className={styles.plusIcon}
      />
    </button>
  );
}

export default ScheduleAddButton;