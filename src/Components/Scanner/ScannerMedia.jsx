import styles from "./ScannerMedia.module.css";

// Component used for displaying either the live camera feed
// or a preview image captured by the scanner
function ScannerMedia({ videoRef, previewImage }) {

  // Displays the captured preview image if one exists
  if (previewImage) {
    return (
      <img
        className={styles.camera}
        src={previewImage}
        alt=""
      />
    );
  }

  // Displays the live camera feed when no preview image is available
  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      muted
      className={styles.camera}
    />
  );
}

export default ScannerMedia;