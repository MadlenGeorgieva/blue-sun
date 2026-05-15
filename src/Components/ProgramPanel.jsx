import styles from "./ProgramPanel.module.css";

const events = [
  { time: "11:00", title: "Gates Open" },
  { time: "11:45", title: "SaveUs – Wonder blue" },
  { time: "12:45", title: "Gallop Derby– The Dragoon" },
  { time: "12:50", title: "Natural Born Hippies – The city festival" },
];

function ProgramPanel() {
  return (
    <div className={styles.programPanel}>
      {events.map((event, index) => (
        <div className={styles.eventRow} key={index}>
          <p className={styles.time}>{event.time}</p>

          <div className={styles.timeline}>
            <span className={styles.dot}></span>
            {index !== events.length - 1 && <span className={styles.line}></span>}
          </div>

          <p className={styles.title}>{event.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ProgramPanel;