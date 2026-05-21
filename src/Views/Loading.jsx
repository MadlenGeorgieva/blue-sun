import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Loading.module.css";

import loadingSun from "../assets/sun-dark.png";

// Displays a loading screen before automatically navigating
// the user to the login page
function Loading() {

  // Allows navigation between pages inside the application
  const navigate = useNavigate();

  // Starts a timer when the page loads
  // After 2.2 seconds the user is redirected to the login page
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2200);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className={styles.page}>

      {/* Loading image */}
      <img
        className={styles.sunImage}
        src={loadingSun}
        alt="Loading"
      />

      <p>
        LOADING...
      </p>
    </section>
  );
}

export default Loading;