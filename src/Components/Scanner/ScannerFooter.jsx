import styles from "./ScannerFooter.module.css";

function ScannerFooter() {
  return (
    <footer className={styles.footer}>
      <button className={styles.scanButton}></button>
    </footer>
  );
}

export default ScannerFooter;