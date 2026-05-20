import styles from "./ScannerOverlay.module.css";

function ScannerOverlay() {
  return (
    <>
      <div className={styles.overlayTop}></div>
      <div className={styles.overlayLeft}></div>
      <div className={styles.overlayRight}></div>
      <div className={styles.overlayBottom}></div>
    </>
  );
}

export default ScannerOverlay;