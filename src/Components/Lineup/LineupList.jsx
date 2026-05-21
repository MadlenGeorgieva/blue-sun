import LineupArtistRow from "./LineupArtistRow";

// Displaying all artists in the lineup
// It loops through the artists array and renders one LineupArtistRow for each artist
function LineupList({ artists, savedArtists, toggleSave }) {
  return (

    // Container holding all lineup artist rows
    <div>
      {artists.map((artist, index) => (
        <LineupArtistRow
          key={artist.name}
          artist={artist}
          isLast={index === artists.length - 1}
          isSaved={savedArtists[artist.name]}
          toggleSave={toggleSave}
        />
      ))}
    </div>
  );
}

export default LineupList;