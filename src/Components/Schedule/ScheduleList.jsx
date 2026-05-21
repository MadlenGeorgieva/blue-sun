import ScheduleArtistRow from "./ScheduleArtistRow";

function ScheduleList({ saved, toggleSave }) {
  if (saved.length === 0) {
    return <p>No artists saved yet. Heart some in Lineup!</p>;
  }

  return (
    <div>
      {saved.map((artist, index) => (
        <ScheduleArtistRow
          key={artist.name}
          artist={artist}
          isLast={index === saved.length - 1}
          toggleSave={toggleSave}
        />
      ))}
    </div>
  );
}

export default ScheduleList;