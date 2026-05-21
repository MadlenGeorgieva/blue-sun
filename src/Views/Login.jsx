import { Link, useNavigate } from "react-router-dom";

import styles from "./Form.module.css";

import loginSun from "../assets/Log-In.png";

import InputField from "../Components/Forms/FormInput";
import SubmitButton from "../Components/Forms/FormButton";
import SwitchLink from "../Components/Forms/FormSwitch";

// Displays the login form and allows the user
// to navigate to the home or signup page
function Login() {

  // Allows navigation between pages inside the application
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <section className={styles.page}>

        {/* Login illustration displayed above the form */}
        <img
          className={styles.formSun}
          src={loginSun}
          alt="Log in"
        />

        {/* Login form section */}
        <form
          className={styles.form}

          // Prevents page reload and navigates to the home page after submit
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/home");
          }}
        >

            {/* Email input field */}
            <InputField
              label="Email:"
              type="email"
              placeholder="Email..."
              autoComplete="email"
            />

            {/* Password input field */}
            <InputField
              label="Password:"
              type="password"
              placeholder="Password..."
              autoComplete="current-password"
            />

          {/* Extra login options */}
          <div className={styles.row}>
            <label className={styles.checkLabel}>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="#">
              Forgot password?
            </a>
          </div>

          <SubmitButton text="Log In" />

          {/* Link for switching to the signup page */}
          <SwitchLink
            text="Don’t have an account?"
            linkText="Sign up"
            to="/signup"
          />
        </form>
      </section>
    </div>
  );
}

export default Login;