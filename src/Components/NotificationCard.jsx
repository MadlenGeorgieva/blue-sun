import styles from "./NotificationCard.module.css";

function NotificationCard({ icon, title, date }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconCircle}>
        <img src={icon} alt="" />
      </div>

      <div className={styles.content}>
        <h2>{title}</h2>
        <span>{date}</span>
      </div>
    </article>
  );
}

export default NotificationCard;