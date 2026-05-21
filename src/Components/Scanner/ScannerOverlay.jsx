import styles from "./ScannerOverlay.module.css";

// The overlay darkens the area outside the scanner frame to guide the user
function ScannerOverlay() {
  return (

    // Overlay sections positioned around the scanner frame
    <>
      <div className={styles.overlayTop}></div>
      <div className={styles.overlayLeft}></div>
      <div className={styles.overlayRight}></div>
      <div className={styles.overlayBottom}></div>
    </>
  );
}

export default ScannerOverlay;