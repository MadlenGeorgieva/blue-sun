import styles from "./ScannerFooter.module.css";

// Contains the main scan button used for scanning functionality
function ScannerFooter() {
  return (

    // Footer container positioned at the bottom of the scanner page
    <footer className={styles.footer}>

      <button className={styles.scanButton}></button>
    </footer>
  );
}

export default ScannerFooter;