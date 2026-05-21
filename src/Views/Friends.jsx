import { useState } from "react";

import styles from "./Friends.module.css";

import PageTitle from "../Components/PageTitle";
import FriendsSearch from "../Components/Friends/FriendsSearch";
import FriendsLocationBanner from "../Components/Friends/FriendsLocationBanner";
import FriendCard from "../Components/Friends/FriendCard";
import ActionButton from "../Components/ActionButton";

import subtitleIcon from "../assets/sun-dark.png";
import qrCode from "../assets/qr-code.png";
import infoIcon from "../assets/info.png";

import nannaImg from "../assets/Nanna.jpg";
import frejaImg from "../assets/Freja.jpg";

// Array containing friend information displayed on the page
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

// Friends page component
// Displays the user's festival friends, search functionality,
// and quick access to adding more friends
function Friends() {

  // Stores the current search input value
  const [search, setSearch] = useState("");

  // Filters the friends list based on the search input
  const filteredFriends = friends.filter(
    (friend) =>
      friend.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (

    // Main page container
    <section className={styles.page}>

      {/* Page title section */}
      <PageTitle title="Friends" />

      {/* Subtitle section */}
      <p className={styles.subtitle}>
        <img src={subtitleIcon} alt="" />
        Your festival crew
      </p>

      {/* Search component used for filtering friends */}
      <FriendsSearch
        value={search}
        onChange={setSearch}
      />

      {/* Banner showing live location sharing information */}
      <FriendsLocationBanner />

      {/* Friends list section */}
      <h2 className={styles.sectionTitle}>
        Your Friends
      </h2>

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

      {/* Button used for adding friends through QR ticket scanning */}
      <div className={styles.ticketButton}>
        <ActionButton
          icon={qrCode}
          text="Scan Friend’s Ticket to add them"
          link="/scanner"
        />
      </div>

      {/* Informational note displayed at the bottom of the page */}
      <div className={styles.note}>
        <img src={infoIcon} alt="" />

        <span>
          Friends are only active during the festival
        </span>
      </div>
    </section>
  );
}

export default Friends;