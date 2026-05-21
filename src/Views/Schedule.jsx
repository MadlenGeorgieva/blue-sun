import styles from "./Schedule.module.css";

import PageTitle from "../Components/PageTitle";
import ScheduleHeader from "../Components/Schedule/ScheduleHeader";
import ScheduleList from "../Components/Schedule/ScheduleList";
import ScheduleAddButton from "../Components/Schedule/ScheduleAddButton";

// Displays all artists saved by the user from the lineup page
function Schedule({ artists, savedArtists, toggleSave }) {

  // Filters the artist list and keeps only the saved artists
  const saved = artists.filter(
    (artist) => savedArtists[artist.name]
  );

  return (
    <section className={styles.page}>
      <main className={styles.main}>

        <PageTitle title="Schedule" />

        {/* Schedule information header */}
        <ScheduleHeader />

        {/* List displaying all saved artists */}
        <ScheduleList
          saved={saved}
          toggleSave={toggleSave}
        />

        {/* Button used for navigating back to the lineup page */}
        <ScheduleAddButton />
      </main>
    </section>
  );
}

export default Schedule;