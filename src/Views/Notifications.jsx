import styles from "./Notifications.module.css";

import PageTitle from "../Components/PageTitle";
import NotificationCard from "../Components/Notifications/NotificationCard";

import friendsIcon from "../assets/friends-dark.png";
import programIcon from "../assets/speaker.png";
import mapIcon from "../assets/map-dark.png";
import logoIcon from "../assets/BlaSolDark.png";

// Array containing notification information displayed on the page
const notifications = [
  {
    icon: friendsIcon,
    title: "Did you know you can keep in touch with friends?",
    date: "02.06.2026",
  },

  {
    icon: programIcon,
    title: "Program is now available",
    date: "01.06.2026",
  },

  {
    icon: mapIcon,
    title: "Plan your travels ahead",
    date: "20.12.2026",
  },

  {
    icon: logoIcon,
    title: "Welcome to Blå Sol Festival",
    date: "11.05.2026",
  },
];

// Displays festival notifications and updates for the user
function Notifications() {
  return (

    <section className={styles.notificationsPage}>

      <PageTitle title="Notifications" />

      {/* Notification list section */}
      <div className={styles.list}>
        {notifications.map((item) => (
          <NotificationCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
    </section>
  );
}

export default Notifications;