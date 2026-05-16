import styles from "./FriendsSearch.module.css";
import searchIcon from "../assets/search.png";

function FriendsSearch() {
  return (
    <div className={styles.search}>
      <img src={searchIcon} alt="" />
      <input type="text" placeholder="Search a friend..." />
    </div>
  );
}

export default FriendsSearch;