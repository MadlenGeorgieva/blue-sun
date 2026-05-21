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

// Stores the songs shown in the music player
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

// Converts the song time from seconds into a readable minutes:seconds format
function formatTime(time) {
  if (!time || Number.isNaN(time)) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// Music player component used in the Music tab
// It controls playing, pausing, switching songs, liking a song, and showing real-time progress
function MusicPanel() {
  const [isSaved, setIsSaved] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const currentSong = songs[currentSongIndex];

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  // Handles the audio playback logic
  // Browser audio can fail if the user has not interacted with the page, so errors are handled safely
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

  // Handles play/pause and moving between songs
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

  // Updates song duration and current playback time
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Reloads the audio whenever the selected song changes
  // If music was already playing, the next selected song continues automatically
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

      {/* Displays the current song image and like button */}
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

      {/* Displays song details, progress, time, and controls */}
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