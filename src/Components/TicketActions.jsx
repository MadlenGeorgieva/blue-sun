import styles from "./TicketActions.module.css";

import ActionButton from "./ActionButton";

import qrCode from "../assets/qr-code.png";
import friends from "../assets/friends-light.png";

function TicketActions() {
  return (
    <section className={styles.ticketActions}>
      <ActionButton icon={qrCode} text="Scan Friend’s Ticket" />
      <ActionButton icon={friends} text="Friend’s List" />
    </section>
  );
}

export default TicketActions;