import styles from "./Friends.module.css";

import PageTitle from "../Components/PageTitle";
import FriendsSearch from "../Components/FriendsSearch";
import FriendsLocationBanner from "../Components/FriendsLocationBanner";
import FriendCard from "../Components/FriendCard";
import ActionButton from "../Components/ActionButton";

import nannaImg from "../assets/Nanna.jpg";
import frejaImg from "../assets/Freja.jpg";

import qrIcon from "../assets/qr-code.png";
import sunDark from "../assets/sun-dark.png";
import infoIcon from "../assets/info.png";

const friends = [
  {
    name: "Nanna Sørensen",
    location: "Bla Scene",
    image: nannaImg,
    battery: "67%",
  },
  {
    name: "Freja Lauritsen",
    location: "Main Entrance",
    image: frejaImg,
    battery: "67%",
  },
];

function Friends() {
  return (
    <section className={styles.page}>
      <PageTitle title="Friends" />

      <p className={styles.subtitle}>
        <img src={sunDark} alt="" />
        Your festival crew
      </p>

      <FriendsSearch />

      <FriendsLocationBanner />

      <h2 className={styles.sectionTitle}>Your Friends</h2>

      <div className={styles.list}>
        {friends.map((friend) => (
          <FriendCard key={friend.name} {...friend} />
        ))}
      </div>

      <div className={styles.ticketButton}>
        <ActionButton
          icon={qrIcon}
          text="Scan Friend’s Ticket to add them"
        />
      </div>

      <div className={styles.note}>
        <img src={infoIcon} alt="" />
        <span>Friends are only active during the festival</span>
      </div>
    </section>
  );
}

export default Friends;