import styles from "./ProgramPanel.module.css";

// Array containing the festival program events
const events = [
  { time: "11:00", title: "Gates Open" },
  { time: "11:45", title: "SaveUs – Wonder blue" },
  { time: "12:45", title: "Gallop Derby– The Dragoon" },
  { time: "12:50", title: "Natural Born Hippies – The city festival" },
];

// Component displaying a preview of the festival program
// Events are displayed in a timeline layout
function ProgramPanel() {
  return (

    // Main container holding all program events
    <div className={styles.programPanel}>

      {/* Loops through the events array and displays each event */}
      {events.map((event, index) => (
        <div className={styles.eventRow} key={index}>

          <p className={styles.time}>
            {event.time}
          </p>

          {/* Timeline section with a dot and connecting line */}
          <div className={styles.timeline}>
            <span className={styles.dot}></span>

            {index !== events.length - 1 && (
              <span className={styles.line}></span>
            )}
          </div>

          <p className={styles.title}>
            {event.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProgramPanel;