// Imports the navigation hook from React Router
// useNavigate is used to navigate the user to another page
import { useNavigate } from "react-router-dom";

import styles from "./FriendCard.module.css";

import locationIcon from "../../assets/location-outline-dark.png";
import batteryImg from "../../assets/battery.png";
import arrowDark from "../../assets/arrow-dark.png";

// Reusable component that displays information about a friend
// The component receives props
function FriendCard({ name, location, image, battery }) {

  // Creates navigation functionality
  const navigate = useNavigate();

  return (
    <article
      className={styles.card}
      onClick={() => navigate("/map")}
    >

      <div className={styles.avatarWrap}>
        <img
          className={styles.avatar}
          src={image}
          alt={name}
        />

        {/* Small indicator showing the friend is online */}
        <span className={styles.online}></span>
      </div>

      <div className={styles.info}>
        <h3>{name}</h3>

        <div className={styles.location}>
          <img src={locationIcon} alt="" />
          <span>{location}</span>

          <div className={styles.batteryWrap}>
            <img src={batteryImg} alt="" />
            <span>{battery}</span>
          </div>
        </div>
      </div>

      {/* Arrow icon indicating the card is clickable */}
      <img
        className={styles.arrow}
        src={arrowDark}
        alt=""
      />
    </article>
  );
}

export default FriendCard;