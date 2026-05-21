import { useNavigate } from "react-router-dom";

import styles from "./Form.module.css";

import signupSun from "../assets/Sign-Up.png";

import InputField from "../Components/Forms/FormInput";
import SubmitButton from "../Components/Forms/FormButton";
import SwitchLink from "../Components/Forms/FormSwitch";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <section className={styles.page}>
        <img
          className={styles.formSun}
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
          <InputField
            label="Name:"
            type="text"
            placeholder="Name..."
          />

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

          <label className={styles.terms}>
            <input type="checkbox" />

            <span>
              I agree to the Terms and Conditions and
              Privacy Policy
            </span>
          </label>

          <SubmitButton text="Sign Up" />

          <SwitchLink
            text="Have an account?"
            linkText="Log In"
            to="/login"
          />
        </form>
      </section>
    </div>
  );
}

export default Signup;