import { useState } from "react";
import styles from "./LineUp.module.css";

import PageTitle from "../Components/PageTitle";
import LineupSearch from "../Components/Lineup/LineupSearch";
import LineupList from "../Components/Lineup/LineupList";

function Lineup({ artists, savedArtists, toggleSave }) {
  const [search, setSearch] = useState("");

  const filtered = artists.filter(
    (artist) =>
      artist.name.toLowerCase().includes(search.toLowerCase()) ||
      artist.stage.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className={styles.page}>
      <main className={styles.main}>
        <PageTitle title="Line Up" />

        <LineupSearch value={search} onChange={setSearch} />

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