// Imports the CSS styles used for the input fields
import styles from "./FormInput.module.css";

// Reusable input component used in forms
// The component receives props
function FormInput({ label, type, placeholder }) {
  return (
    <div className={styles.field}>
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

// Exports the component so it can be reused in other files
export default FormInput;