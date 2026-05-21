import { useNavigate } from "react-router-dom";

import styles from "./TicketActions.module.css";

import ActionButton from "./ActionButton";

import qrCode from "../assets/qr-code.png";
import friends from "../assets/friends-light.png";

// Allows the user to navigate to the scanner and friends pages
function TicketActions() {

  // Allows navigation between pages inside the application
  const navigate = useNavigate();

  return (

    // Main section containing the action buttons
    <section className={styles.ticketActions}>

      {/* Button used for navigating to the ticket scanner page */}
      <div onClick={() => navigate("/scanner")}>
        <ActionButton
          icon={qrCode}
          text="Scan Friend’s Ticket"
        />
      </div>

      {/* Button used for navigating to the friends page */}
      <div onClick={() => navigate("/friends")}>
        <ActionButton
          icon={friends}
          text="Friend’s List"
        />
      </div>
    </section>
  );
}

export default TicketActions;