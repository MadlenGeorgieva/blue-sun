import styles from "./LineupSearch.module.css";
import searchIcon from "../../assets/search.png";

function LineupSearch({ value, onChange }) {
  return (
    <div className={styles.searchWrapper}>
      <img src={searchIcon} alt="" className={styles.searchIcon} />

      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search artist or stage..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default LineupSearch;