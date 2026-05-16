import { useState } from "react";

import styles from "./Friends.module.css";

import PageTitle from "../Components/PageTitle";
import FriendsSearch from "../Components/FriendsSearch";
import FriendsLocationBanner from "../Components/FriendsLocationBanner";
import FriendCard from "../Components/FriendCard";
import ActionButton from "../Components/ActionButton";

import subtitleIcon from "../assets/sun-dark.png";
import qrCode from "../assets/qr-code.png";
import infoIcon from "../assets/info.png";

import nannaImg from "../assets/Nanna.jpg";
import frejaImg from "../assets/Freja.jpg";

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
  const [search, setSearch] = useState("");

  const filteredFriends = friends.filter(
    (friend) =>
      friend.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className={styles.page}>
      <PageTitle title="Friends" />

      <p className={styles.subtitle}>
        <img src={subtitleIcon} alt="" />
        Your festival crew
      </p>

      <FriendsSearch value={search} onChange={setSearch} />

      <FriendsLocationBanner />

      <h2 className={styles.sectionTitle}>Your Friends</h2>

      <div className={styles.list}>
        {filteredFriends.map((friend) => (
          <FriendCard
            key={friend.name}
            name={friend.name}
            location={friend.location}
            image={friend.image}
            battery={friend.battery}
          />
        ))}
      </div>

      <div className={styles.ticketButton}>
        <ActionButton
          icon={qrCode}
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