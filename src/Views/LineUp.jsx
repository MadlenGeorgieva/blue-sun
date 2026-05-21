import { useState } from "react";
import styles from "./LineUp.module.css";

import PageTitle from "../Components/PageTitle";
import LineupSearch from "../Components/Lineup/LineupSearch";
import LineupList from "../Components/Lineup/LineupList";

// Displays all festival artists and allows users
// to search and save artists to their schedule
function Lineup({ artists, savedArtists, toggleSave }) {

  // Stores the current search input value
  const [search, setSearch] = useState("");

  // Filters artists based on artist name or stage name
  const filtered = artists.filter(
    (artist) =>
      artist.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      artist.stage
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (

    // Main lineup page container
    <section className={styles.page}>
      <main className={styles.main}>

        <PageTitle title="Line Up" />

        {/* Search component used for filtering artists */}
        <LineupSearch
          value={search}
          onChange={setSearch}
        />

        {/* Artist list section */}
        <LineupList
          artists={filtered}
          savedArtists={savedArtists}
          toggleSave={toggleSave}
        />
      </main>
    </section>
  );
}

export default Lineup;