import styles from "./SosModal.module.css";

function SosModal({ onClose, onSelect }) {
  return (
    <div className={styles.sosOverlay} onClick={onClose}>
      <div className={styles.sosModal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.sosTitle}>Need Help?</h2>
        <p className={styles.sosText}>Your live location will be shared with festival staff.</p>
        <div className={styles.sosOptions}>
          <button className={styles.sosOption} onClick={() => onSelect("medical")}>
            <h3>Medical</h3>
            <p>Injury, illness, overdose.</p>
          </button>
          <button className={styles.sosOption} onClick={() => onSelect("general")}>
            <h3>General</h3>
            <p>Lost, harassment, other.</p>
          </button>
        </div>
        <button className={styles.sosClose} onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default SosModal;