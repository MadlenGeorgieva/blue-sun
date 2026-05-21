import styles from "./FriendsSearch.module.css";
import searchIcon from "../../assets/search.png";

// Reusable search component used for filtering friends
// The component receives the current search value and a function for updating it
function FriendsSearch({ value, onChange }) {
  return (

    // Search bar containing an icon and input field
    <div className={styles.search}>
      <img src={searchIcon} alt="" />

      <input
        type="text"
        placeholder="Search a friend..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default FriendsSearch;