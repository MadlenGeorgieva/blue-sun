import { Link, useNavigate } from "react-router-dom";

import styles from "./Form.module.css";

import loginSun from "../assets/Log-In.png";

import InputField from "../Components/Forms/FormInput";
import SubmitButton from "../Components/Forms/FormButton";
import SwitchLink from "../Components/Forms/FormSwitch";

function Login() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <section className={styles.page}>
        <img
          className={styles.formSun}
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
          <InputField
            label="Email:"
            type="email"
            placeholder="Email..."
          />

          <InputField
            label="Password:"
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

          <SubmitButton text="Log In" />

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