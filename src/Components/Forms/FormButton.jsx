
import styles from "./FormButton.module.css";

// Reusable button component used in forms such as Log In and Sign Up
// The button text is passed into the component as a prop
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