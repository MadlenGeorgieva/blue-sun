import { useNavigate } from "react-router-dom";

import styles from "./NotFound.module.css";

import notFoundSun from "../assets/404.png";
import arrow from "../assets/arrow.png";

// 404 page component displayed when a route does not exist
function NotFound() {

  // Allows navigation between pages inside the application
  const navigate = useNavigate();

  return (

    <section className={styles.page}>
      <div className={styles.content}>

        <p className={styles.subtitle}>
          Oops... this page got lost at the festival
        </p>

        <img
          className={styles.sun}
          src={notFoundSun}
          alt="404"
        />

        {/* Button used for navigating back to the home page */}
        <button
          className={styles.button}
          onClick={() => navigate("/home")}
        >
          <span>
            Return to Home
          </span>

          <img src={arrow} alt="" />
        </button>
      </div>
    </section>
  );
}

export default NotFound;