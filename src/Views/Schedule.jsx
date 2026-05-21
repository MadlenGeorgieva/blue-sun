import styles from "./Schedule.module.css";

import PageTitle from "../Components/PageTitle";
import ScheduleHeader from "../Components/Schedule/ScheduleHeader";
import ScheduleList from "../Components/Schedule/ScheduleList";
import ScheduleAddButton from "../Components/Schedule/ScheduleAddButton";

function Schedule({ artists, savedArtists, toggleSave }) {
  const saved = artists.filter((artist) => savedArtists[artist.name]);

  return (
    <section className={styles.page}>
      <main className={styles.main}>
        <PageTitle title="Schedule" />

        <ScheduleHeader />

        <ScheduleList
          saved={saved}
          toggleSave={toggleSave}
        />

        <ScheduleAddButton />
      </main>
    </section>
  );
}

export default Schedule;