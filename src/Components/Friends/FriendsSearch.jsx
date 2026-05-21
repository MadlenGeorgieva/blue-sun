import styles from "./FriendsSearch.module.css";
import searchIcon from "../../assets/search.png";

function FriendsSearch({ value, onChange }) {
  return (
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