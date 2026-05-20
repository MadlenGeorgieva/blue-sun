import styles from "./ScannerMedia.module.css";

function ScannerMedia({ videoRef, previewImage }) {
  if (previewImage) {
    return <img className={styles.camera} src={previewImage} alt="" />;
  }

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