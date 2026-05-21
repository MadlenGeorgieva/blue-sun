import styles from "./LineupSearch.module.css";
import searchIcon from "../../assets/search.png";

// Reusable search component used for filtering artists in the lineup
// The component receives the current search value and a function for updating it
function LineupSearch({ value, onChange }) {
  return (

    // Search bar containing the search icon and input field
    <div className={styles.searchWrapper}>
      <img
        src={searchIcon}
        alt=""
        className={styles.searchIcon}
      />

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