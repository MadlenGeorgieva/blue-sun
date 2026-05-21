import styles from "./FriendsNearby.module.css";

function FriendsNearby({ friends, focusedFriend, onFocusFriend }) {
  return (
    <div className={styles.friendsBar}>
      <div className={styles.friendsCount}>
        <span className={styles.friendsNum}>{friends.length}</span>
        <span className={styles.friendsLabel}>Friends Nearby</span>
      </div>
      <div className={styles.friendAvatars}>
        {friends.map((friend, i) => (
          <button
            key={friend.name}
            className={`${styles.avatarButton} ${focusedFriend === i ? styles.activeAvatar : ""}`}
            onClick={() => onFocusFriend(i)}
          >
            <img src={friend.image} alt={friend.name} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default FriendsNearby;