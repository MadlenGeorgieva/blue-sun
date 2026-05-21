import styles from "./FormInput.module.css";

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

export default FormInput;