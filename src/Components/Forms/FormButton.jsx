import styles from "./FormButton.module.css";

function FormButton({ text }) {
  return (
    <button
      type="submit"
      className={styles.button}
    >
      {text}
    </button>
  );
}

export default FormButton;