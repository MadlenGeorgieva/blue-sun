import { useNavigate } from "react-router-dom";

import styles from "./FriendCard.module.css";

import locationIcon from "../../assets/location-outline-dark.png";
import batteryImg from "../../assets/battery.png";
import arrowDark from "../../assets/arrow-dark.png";

function FriendCard({ name, location, image, battery }) {
  const navigate = useNavigate();

  return (
    <article
      className={styles.card}
      onClick={() => navigate("/map")}
    >
      <div className={styles.avatarWrap}>
        <img className={styles.avatar} src={image} alt={name} />
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

      <img className={styles.arrow} src={arrowDark} alt="" />
    </article>
  );
}

export default FriendCard;