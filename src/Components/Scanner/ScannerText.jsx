import styles from "./ScannerText.module.css";

function ScannerText() {
  return (
    <div className={styles.text}>
      <h1>
        Scan your
        <br />
        Friend’s Ticket QR
      </h1>

      <p>Center the QR code in the frame</p>
    </div>
  );
}

export default ScannerText;