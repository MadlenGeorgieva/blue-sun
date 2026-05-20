import styles from "./ScannerFrame.module.css";

function ScannerFrame() {
  return (
    <div className={styles.scanFrame}>
      <span className={styles.cornerTopLeft}></span>
      <span className={styles.cornerTopRight}></span>
      <span className={styles.cornerBottomLeft}></span>
      <span className={styles.cornerBottomRight}></span>
    </div>
  );
}

export default ScannerFrame;