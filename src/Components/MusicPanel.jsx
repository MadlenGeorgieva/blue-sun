import { useState } from "react";
import styles from "./MusicPanel.module.css";

import SaveUs from "../assets/SaveUs.jpg";
import heartActive from "../assets/heart-active.png";
import heartNotActive from "../assets/heart-not-active.png";
import locationIcon from "../assets/location-outline-dark.png";

function MusicPanel() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className={styles.musicPanel}>
      <div className={styles.imageCard}>
        <img className={styles.bandImage} src={SaveUs} alt="Save Us" />
    
        <button
          className={styles.heartButton}
          onClick={() => setIsSaved(!isSaved)}
          aria-label={isSaved ? "Remove from schedule" : "Save to schedule"}
        >
          <img src={isSaved ? heartActive : heartNotActive} alt="" />
        </button>
      </div>

      <div className={styles.info}>
        <p className={styles.nowPlaying}>Now playing</p>
        <h2>SAVE US</h2>
        <div className={styles.artistRow}>
          <img src={locationIcon} alt="" />
          <p className={styles.artist}>Wonder Blue</p>
        </div>

        <div className={styles.progress}>
          <span></span>
        </div>

        <div className={styles.times}>
          <span>1:42</span>
          <span>4:42</span>
        </div>

        <div className={styles.controls}>
          <button>⏮</button>
          <button className={styles.play}>▶</button>
          <button>⏭</button>
        </div>
      </div>
    </div>
  );
}

export default MusicPanel;