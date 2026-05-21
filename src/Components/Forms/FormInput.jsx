// Imports the CSS styles used for the input fields
import styles from "./FormInput.module.css";

// Reusable input component used in forms
// The component receives label, input type,
// placeholder text, and autocomplete settings as props
function FormInput({
  label,
  type,
  placeholder,
  autoComplete,
}) {
  return (
    <div className={styles.field}>
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </div>
  );
}

// Exports the component so it can be reused in other files
export default FormInput;