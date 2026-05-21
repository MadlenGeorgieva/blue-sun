import styles from "./ScannerFrame.module.css";

// The frame visually marks the scanning area for the user
function ScannerFrame() {
  return (
    <div className={styles.scanFrame}>

      {/* Corner elements used to create the scanner frame design */}
      <span className={styles.cornerTopLeft}></span>
      <span className={styles.cornerTopRight}></span>
      <span className={styles.cornerBottomLeft}></span>
      <span className={styles.cornerBottomRight}></span>
    </div>
  );
}

export default ScannerFrame;