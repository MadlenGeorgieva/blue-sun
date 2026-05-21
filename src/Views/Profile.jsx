import styles from "./Profile.module.css";

import PageTitle from "../Components/PageTitle";
import ProfileMenuCard from "../Components/Profile/ProfileMenuCard";

import profileImg from "../assets/profile-photo.jpg";

import {
  festivalLinks,
  settingsLinks,
} from "../Components/Profile/ProfileMenuLinks";

// Displays the user's profile information,
// festival shortcuts, and settings options
function Profile() {
  return (

    <section className={styles.page}>

      <PageTitle title="Profile" />

      {/* User profile information section */}
      <div className={styles.profileHeader}>
        <img
          className={styles.avatar}
          src={profileImg}
          alt="Matteo Leppori"
        />

        <div className={styles.profileInfo}>
          <h2>
            Matteo
            <br />
            Leppori
          </h2>

          <button className={styles.editButton}>
            Edit Profile
          </button>
        </div>
      </div>

      {/* Festival related links section */}
      <h3 className={styles.sectionTitle}>
        My Festival
      </h3>

      <div className={styles.list}>
        {festivalLinks.map((item) => (
          <ProfileMenuCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            text={item.text}
            link={item.link}
          />
        ))}
      </div>

      {/* Settings related links section */}
      <h3 className={styles.sectionTitle}>
        Settings
      </h3>

      <div className={styles.list}>
        {settingsLinks.map((item) => (
          <ProfileMenuCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            text={item.text}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Profile;