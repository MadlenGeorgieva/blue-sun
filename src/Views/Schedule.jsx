import { useNavigate } from "react-router-dom";
import styles from "./Schedule.module.css";

import PageTitle from "../Components/PageTitle";

import locationIcon from "../assets/location-outline-dark.png";
import heartActive from "../assets/heart-active.png";

import musicListIcon from "../assets/musiclist-white.png";
import plusIcon from "../assets/plusIcon.png";

function Schedule({ artists, savedArtists, toggleSave }) {
  const navigate = useNavigate();

  const saved = artists.filter((a) => savedArtists[a.name]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PageTitle title="Schedule" />

        <div className={styles.savedFrom}>
          <img
            src={musicListIcon}
            alt=""
            className={styles.savedIcon}
          />

          <span>Saved from lineup</span>
        </div>

        <div className={styles.nowRow}>
          <span className={styles.nowBadge}>Now</span>
          <div className={styles.nowLine} />
        </div>

        <div className={styles.list}>
          {saved.length === 0 ? (
            <p className={styles.empty}>
              No artists saved yet. Heart some in Lineup!
            </p>
          ) : (
            saved.map((artist, index) => (
              <div className={styles.row} key={artist.name}>
                <p className={styles.time}>{artist.time}</p>

                <div className={styles.timeline}>
                  <span className={styles.dot}></span>

                  {index !== saved.length - 1 && (
                    <span className={styles.line}></span>
                  )}
                </div>

                <div className={styles.imgBox}>
                  {artist.image ? (
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className={styles.artistImg}
                    />
                  ) : (
                    <div className={styles.imgPlaceholder} />
                  )}
                </div>

                <div className={styles.info}>
                  <h2 className={styles.name}>{artist.name}</h2>

                  <div className={styles.stageRow}>
                    <img
                      src={locationIcon}
                      alt=""
                      className={styles.locationIcon}
                    />

                    <span className={styles.stage}>
                      {artist.stage}
                    </span>
                  </div>
                </div>

                <button
                  className={styles.heartButton}
                  onClick={() => toggleSave(artist.name)}
                >
                  <img src={heartActive} alt="" />
                </button>
              </div>
            ))
          )}
        </div>

        <button
          className={styles.addButton}
          onClick={() => navigate("/lineup")}
        >
          <img
            src={musicListIcon}
            alt=""
            className={styles.addIcon}
          />

          <span>Add more artists</span>

          <img
            src={plusIcon}
            alt=""
            className={styles.plusIcon}
          />
        </button>
      </main>
    </div>
  );
}

export default Schedule;