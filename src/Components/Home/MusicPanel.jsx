import { useEffect, useRef, useState } from "react";
import styles from "./MusicPanel.module.css";

import SaveUs from "../../assets/SaveUs.jpg";
import GnawImg from "../../assets/GNAW1.jpg";
import InfernalImg from "../../assets/infernal.jpg";

import saveUsSong from "../../assets/save-us.mp3";
import gnawSong from "../../assets/gnaw.mp3";
import infernalSong from "../../assets/Infernal.mp3";

import heartActive from "../../assets/heart-active.png";
import heartNotActive from "../../assets/heart-not-active.png";
import locationIcon from "../../assets/location-outline-dark.png";

const songs = [
  {
    title: "SAVE US",
    stage: "Wonder Blue",
    image: SaveUs,
    audio: saveUsSong,
  },
  {
    title: "GNAW",
    stage: "Wonder Blue",
    image: GnawImg,
    audio: gnawSong,
  },
  {
    title: "INFERNAL",
    stage: "The birch grove",
    image: InfernalImg,
    audio: infernalSong,
  },
];

function formatTime(time) {
  if (!time || Number.isNaN(time)) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function MusicPanel() {
  const [isSaved, setIsSaved] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const currentSong = songs[currentSongIndex];

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  const playAudio = () => {
    if (!audioRef.current) return;

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.log("Audio could not play:", error);
      });
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      playAudio();
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) =>
      prev === songs.length - 1 ? 0 : prev + 1
    );
  };

  const previousSong = () => {
    setCurrentSongIndex((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.load();
    setCurrentTime(0);
    setDuration(0);

    if (isPlaying) {
      playAudio();
    }
  }, [currentSongIndex]);

  return (
    <div className={styles.musicPanel}>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={nextSong}
      />

      <div className={styles.imageCard}>
        <img
          className={styles.bandImage}
          src={currentSong.image}
          alt={currentSong.title}
        />

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

        <h2>{currentSong.title}</h2>

        <div className={styles.artistRow}>
          <img src={locationIcon} alt="" />
          <p className={styles.artist}>{currentSong.stage}</p>
        </div>

        <div className={styles.progress}>
          <span style={{ left: `${progressPercent}%` }}></span>
        </div>

        <div className={styles.times}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <div className={styles.controls}>
          <button onClick={previousSong}>⏮</button>

          <button className={styles.play} onClick={togglePlay}>
            {isPlaying ? "⏸" : "▶"}
          </button>

          <button onClick={nextSong}>⏭</button>
        </div>
      </div>
    </div>
  );
}

export default MusicPanel;