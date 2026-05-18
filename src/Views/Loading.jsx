import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Loading.module.css";

import loadingSun from "../assets/sun-dark.png";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2200);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className={styles.page}>
      <img className={styles.sunImage} src={loadingSun} alt="Loading" />
      <p>LOADING...</p>
    </section>
  );
}

export default Loading;