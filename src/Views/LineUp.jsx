import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Lineup.module.css";

import locationIcon from "../assets/location-outline-dark.png";
import heartActive from "../assets/heart-active.png";
import heartNotActive from "../assets/heart-not-active.png";

import saveUsImg from "../assets/SaveUs.jpg";
import backBlue from "../assets/back-blue.png";
import searchIcon from "../assets/search-icon.png";

const artists = [
  { time: "11:45", name: "SaveUs", stage: "Wonder blue", image: saveUsImg, saved: false },
  { time: "12:45", name: "Gallop Derby", stage: "The Dragoon", image: null, saved: true },
  { time: "12:50", name: "Natural Born Hippies", stage: "The city festival", image: null, saved: false },
  { time: "13:45", name: "Gnaw", stage: "Wonder blue", image: null, saved: false },
  { time: "14:00", name: "Marie Frank", stage: "The birch grove", image: null, saved: false },
  { time: "15:10", name: "Senior Citizens", stage: "The city festival", image: null, saved: false },
  { time: "15:15", name: "Anastasia", stage: "The birch grove", image: null, saved: true },
  { time: "15:20", name: "Caroline Mousing", stage: "The Dragoon", image: null, saved: false },
  { time: "16:20", name: "Smug", stage: "The birch grove", image: null, saved: false },
];

function Lineup() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [savedState, setSavedState] = useState(
    Object.fromEntries(artists.map((a) => [a.name, a.saved]))
  );

  const toggleSave = (name) => {
    setSavedState((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const filtered = artists.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.stage.toLowerCase().includes(search.toLowerCase())
  );

  return (
      
      <main className={styles.main}>
        <div className={styles.titleRow}>
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            <img src={backBlue} alt="Back" className={styles.backImg} />
          </button>
          <h1 className={styles.title}>Line Up</h1>
        </div>

        <div className={styles.searchWrapper}>
          <img src={searchIcon} alt="" className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search artist or stage..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className={styles.list}>
          {filtered.map((artist, index) => (
            <div className={styles.row} key={artist.name}>
              <p className={styles.time}>{artist.time}</p>

              <div className={styles.timeline}>
                <span className={styles.dot}></span>
                {index !== filtered.length - 1 && (
                  <span className={styles.line}></span>
                )}
              </div>

              <div className={styles.imgBox}>
                {artist.image ? (
                  <img src={artist.image} alt={artist.name} className={styles.artistImg} />
                ) : (
                  <div className={styles.imgPlaceholder} />
                )}
              </div>

              <div className={styles.info}>
                <h2 className={styles.name}>{artist.name}</h2>
                <div className={styles.stageRow}>
                  <img src={locationIcon} alt="" className={styles.locationIcon} />
                  <span className={styles.stage}>{artist.stage}</span>
                </div>
              </div>

              <button
                className={styles.heartButton}
                onClick={() => toggleSave(artist.name)}
                aria-label={savedState[artist.name] ? "Remove from schedule" : "Save to schedule"}
              >
                <img
                  src={savedState[artist.name] ? heartActive : heartNotActive}
                  alt=""
                />
              </button>
            </div>
          ))}
        </div>
      </main>

  );
}

export default Lineup;