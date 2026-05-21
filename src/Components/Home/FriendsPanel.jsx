import styles from "./FriendsPanel.module.css";

import locationIcon from "../../assets/location-outline-dark.png";

import nannaImg from "../../assets/Nanna.jpg";
import frejaImg from "../../assets/Freja.jpg";

import batteryImg from "../../assets/battery.png";

// Array containing information about the user's friends
const friends = [
  {
    name: "Nanna Sørensen",
    location: "Bla Scene",
    image: nannaImg,
    battery: batteryImg,
    percent: "67%",
  },

  {
    name: "Freja Lauritsen",
    location: "Main Entrance",
    image: frejaImg,
    battery: batteryImg,
    percent: "67%",
  },
];

// Component displaying a preview list of friends
function FriendsPanel() {
  return (

    // Main panel containing all friend items
    <div className={styles.friendsPanel}>

      {/* Loops through the friends array and displays each friend */}
      {friends.map((friend, index) => (
        <div className={styles.friendItem} key={friend.name}>
          <img
            className={styles.avatar}
            src={friend.image}
            alt={friend.name}
          />

          <div className={styles.info}>
            <h3>{friend.name}</h3>

            <div className={styles.location}>
              <img src={locationIcon} alt="" />
              <span>{friend.location}</span>
            </div>
          </div>

          <div className={styles.batteryWrapper}>
            <img
              className={styles.battery}
              src={friend.battery}
              alt="Battery"
            />
          </div>

          {/* Divider displayed between friend items */}
          {index !== friends.length - 1 && (
            <div className={styles.divider}></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FriendsPanel;