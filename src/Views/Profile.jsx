import styles from "./Profile.module.css";

import PageTitle from "../Components/PageTitle";
import ProfileMenuCard from "../Components/ProfileMenuCard";

import profileImg from "../assets/profile-photo.jpg";

import ticketIcon from "../assets/ticket.png";
import friendsIcon from "../assets/friends-dark.png";
import scheduleIcon from "../assets/schedule-dark.png";
import notificationIcon from "../assets/notification-dark.png";
import locationIcon from "../assets/map-dark.png";
import helpIcon from "../assets/settings.png";

function Profile() {
  return (
    <section className={styles.page}>
      <PageTitle title="Profile" />

      <div className={styles.profileHeader}>
        <img className={styles.avatar} src={profileImg} alt="Matteo Leppori" />

        <div className={styles.profileInfo}>
          <h2>
            Matteo
            <br />
            Leppori
          </h2>

          <button className={styles.editButton}>Edit Profile</button>
        </div>
      </div>

      <h3 className={styles.sectionTitle}>My Festival</h3>

      <div className={styles.list}>
        <ProfileMenuCard
          icon={ticketIcon}
          title="My Ticket"
          text="View your ticket and details"
          link="/"
        />

        <ProfileMenuCard
          icon={friendsIcon}
          title="Friends"
          text="See your friends locations"
          link="/friends"
        />

        <ProfileMenuCard
          icon={scheduleIcon}
          title="Schedule"
          text="Be updated with the latest schedule"
          link="/schedule"
        />
      </div>

      <h3 className={styles.sectionTitle}>Settings</h3>

      <div className={styles.list}>
        <ProfileMenuCard
          icon={notificationIcon}
          title="Notifications"
          text="Manage your preference"
          link="/notifications"
        />

        <ProfileMenuCard
          icon={locationIcon}
          title="Location Sharing"
          text="Control who can see your location"
          link="/map"
        />

        <ProfileMenuCard
          icon={helpIcon}
          title="Help"
          text="Get support and info"
          link="/help"
        />
      </div>
    </section>
  );
}

export default Profile;