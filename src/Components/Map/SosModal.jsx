import styles from "./SosModal.module.css";

// Modal component displayed when the user presses the SOS button
// Allows the user to select the type of emergency or close the modal
function SosModal({ onClose, onSelect }) {
  return (

    // Background overlay covering the screen
    // Clicking outside the modal closes it
    <div
      className={styles.sosOverlay}
      onClick={onClose}
    >

      {/* Main modal window */}
      <div
        className={styles.sosModal}

        // Prevents clicks inside the modal from closing it
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.sosTitle}>
          Need Help?
        </h2>

        <p className={styles.sosText}>
          Your live location will be shared with festival staff.
        </p>

        {/* Emergency options available to the user */}
        <div className={styles.sosOptions}>

          <button
            className={styles.sosOption}
            onClick={() => onSelect("medical")}
          >
            <h3>Medical</h3>
            <p>Injury, illness, overdose.</p>
          </button>

          <button
            className={styles.sosOption}
            onClick={() => onSelect("general")}
          >
            <h3>General</h3>
            <p>Lost, harassment, other.</p>
          </button>
        </div>

        {/* Button used for closing the modal */}
        <button
          className={styles.sosClose}
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default SosModal;