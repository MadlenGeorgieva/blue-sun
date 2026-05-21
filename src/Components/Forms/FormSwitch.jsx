// Imports the Link component from React Router
// Link is used for navigation between pages without reloading the application
import { Link } from "react-router-dom";

import styles from "./FormSwitch.module.css";

// Reusable component used to switch between Log In and Sign Up pages
// The component receives props
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