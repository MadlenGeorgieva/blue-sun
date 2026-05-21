import { useState } from "react";
import styles from "./FestivalTabs.module.css";

import MusicPanel from "./MusicPanel";
import ProgramPanel from "./ProgramPanel";
import FriendsPanel from "./FriendsPanel";
import PanelActionButton from "./PanelActionButton";

import spotifyIcon from "../../assets/spotify.png";
import scheduleIcon from "../../assets/schedule-outline-white.png";
import friendsIcon from "../../assets/friends-outline-white.png";

// Contains the configuration for each festival tab
const tabs = {
  music: {
    label: "Music",
    content: <MusicPanel />,
    buttonText: "Save to Spotify",
    buttonIcon: spotifyIcon,
    link: "https://open.spotify.com/",
    external: true,
  },

  program: {
    label: "Program",
    content: <ProgramPanel />,
    buttonText: "Full Program",
    buttonIcon: scheduleIcon,
    link: "/schedule",
    external: false,
  },

  friends: {
    label: "Friends",
    content: <FriendsPanel />,
    buttonText: "See all",
    buttonIcon: friendsIcon,
    link: "/friends",
    external: false,
  },
};

// Component used for switching between festival sections
// The active tab is controlled using React state
function FestivalTabs() {

  // Stores the currently selected tab
  const [activeTab, setActiveTab] = useState("music");

  // Gets the information for the active tab
  const current = tabs[activeTab];

  return (
    <section className={styles.section}>

      {/* Navigation section used for switching tabs */}
      <nav className={styles.tabs}>
        {Object.entries(tabs).map(([key, tab]) => (
          <button
            key={key}
            className={`${styles.tab} ${
              activeTab === key ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab(key)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Displays the content and action button for the selected tab */}
      <div className={styles.content}>
        {current.content}
      </div>

      <PanelActionButton
        text={current.buttonText}
        icon={current.buttonIcon}
        link={current.link}
        external={current.external}
      />
    </section>
  );
}

export default FestivalTabs;