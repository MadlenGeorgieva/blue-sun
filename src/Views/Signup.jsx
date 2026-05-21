import { useNavigate } from "react-router-dom";

import styles from "./Form.module.css";

import signupSun from "../assets/Sign-Up.png";

import InputField from "../Components/Forms/FormInput";
import SubmitButton from "../Components/Forms/FormButton";
import SwitchLink from "../Components/Forms/FormSwitch";

// Displays the registration form and allows the user
// to create an account and navigate to the home or login page
function Signup() {

  // Allows navigation between pages inside the application
  const navigate = useNavigate();

  return (

    <div className={styles.wrapper}>
      <section className={styles.page}>

        {/* Signup illustration displayed above the form */}
        <img
          className={styles.formSun}
          src={signupSun}
          alt="Sign up"
        />

        {/* Signup form section */}
        <form
          className={styles.form}

          // Prevents page reload and navigates to the home page after submit
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/home");
          }}
        >

          {/* Form input fields */}
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

          {/* Terms and conditions agreement section */}
          <label className={styles.terms}>
            <input type="checkbox" />

            <span>
              I agree to the Terms and Conditions and
              Privacy Policy
            </span>
          </label>

          {/* Form submit button */}
          <SubmitButton text="Sign Up" />

          {/* Link for switching to the login page */}
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