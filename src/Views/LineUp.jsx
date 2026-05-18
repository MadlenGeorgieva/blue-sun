import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./LineUp.module.css";

import PageTitle from "../Components/PageTitle";
import locationIcon from "../assets/location-outline-dark.png";
import heartActive from "../assets/heart-active.png";
import heartNotActive from "../assets/heart-not-active.png";
import searchIcon from "../assets/search.png";

function Lineup({ artists, savedArtists, toggleSave }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = artists.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.stage.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PageTitle title="Line Up" />

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
                aria-label={savedArtists[artist.name] ? "Remove from schedule" : "Save to schedule"}
              >
                <img
                  src={savedArtists[artist.name] ? heartActive : heartNotActive}
                  alt=""
                />
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Lineup;