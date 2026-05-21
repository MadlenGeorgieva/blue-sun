import ScheduleArtistRow from "./ScheduleArtistRow";

// Component responsible for displaying all saved artists in the schedule
function ScheduleList({ saved, toggleSave }) {

  // Displays a message when the schedule is empty
  if (saved.length === 0) {
    return (
      <p>
        No artists saved yet. Heart some in Lineup!
      </p>
    );
  }

  return (

    // Container holding all saved artist rows
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