import { useNavigate } from "react-router-dom";

import styles from "./TicketActions.module.css";

import ActionButton from "./ActionButton";

import qrCode from "../assets/qr-code.png";
import friends from "../assets/friends-light.png";

function TicketActions() {
  const navigate = useNavigate();

  return (
    <section className={styles.ticketActions}>
      <div onClick={() => navigate("/scanner")}>
        <ActionButton
          icon={qrCode}
          text="Scan Friend’s Ticket"
        />
      </div>

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