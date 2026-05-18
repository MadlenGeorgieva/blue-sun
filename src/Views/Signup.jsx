import { Link, useNavigate } from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import styles from "./Auth.module.css";

import signupSun from "../assets/Sign-Up.png";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <Header />

      <section className={styles.page}>
        <img
          className={styles.authSun}
          src={signupSun}
          alt="Sign up"
        />

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/home");
          }}
        >
          <label>Name:</label>

          <input
            type="text"
            placeholder="Name..."
          />

          <label>Email:</label>

          <input
            type="email"
            placeholder="Email..."
          />

          <label>Password:</label>

          <input
            type="password"
            placeholder="Password..."
          />

          <label className={styles.terms}>
            <input type="checkbox" />

            <span>
              I agree to the Terms and Conditions
              and Privacy Policy
            </span>
          </label>

          <button
            type="submit"
            className={styles.submitButton}
          >
            Sign Up
          </button>

          <p className={styles.switchText}>
            Have an account?{" "}
            <Link to="/login">
              Log In
            </Link>
          </p>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Signup;