import { Link } from "react-router-dom";

import styles from "./FormSwitch.module.css";

function FormSwitch({
  text,
  linkText,
  to,
}) {
  return (
    <p className={styles.switchText}>
      {text}{" "}

      <Link to={to}>
        {linkText}
      </Link>
    </p>
  );
}

export default FormSwitch;