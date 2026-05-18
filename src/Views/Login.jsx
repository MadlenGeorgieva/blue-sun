import { Link, useNavigate } from "react-router-dom";

import styles from "./Auth.module.css";

import loginSun from "../assets/Log-In.png";

function Login() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>

      <section className={styles.page}>
        <img
          className={styles.authSun}
          src={loginSun}
          alt="Log in"
        />

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/home");
          }}
        >
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

          <div className={styles.row}>
            <label className={styles.checkLabel}>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="#">Forgot password?</a>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
          >
            Log In
          </button>

          <p className={styles.switchText}>
            Don’t have an account?{" "}
            <Link to="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}

export default Login;