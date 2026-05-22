import styles from "./FriendsNearby.module.css";

// Component displaying nearby friends on the map page
// Shows the number of nearby friends and allows the user to focus on a selected friend
function FriendsNearby({ friends, focusedFriend, onFocusFriend }) {
  return (

    // Main container holding friend information and avatar buttons
    <div className={styles.friendsBar}>

      {/* Displays the number of nearby friends */}
      <div className={styles.friendsCount}>
        <span className={styles.friendsNum}>
          {friends.length}
        </span>

        <span className={styles.friendsLabel}>
          Friends Nearby
        </span>
      </div>

{/* Friend avatar buttons — tap to highlight that friend's bubble on the map */}
      <div className={styles.friendAvatars}>
        {friends.map((friend, i) => (
          <button
            key={friend.name}
            className={`${styles.avatarButton} ${
              focusedFriend === i ? styles.activeAvatar : ""
            }`}
            onClick={() => onFocusFriend(i)}
          >
            <img
              src={friend.image}
              alt={friend.name}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default FriendsNearby;