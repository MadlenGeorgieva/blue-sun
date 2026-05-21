import styles from "./ScannerText.module.css";

// Provides instructions for scanning a friend's QR ticket
function ScannerText() {
  return (

    // Container holding the scanner title and helper text
    <div className={styles.text}>

      <h1>
        Scan your
        <br />
        Friend’s Ticket QR
      </h1>

      <p>
        Center the QR code in the frame
      </p>
    </div>
  );
}

export default ScannerText;