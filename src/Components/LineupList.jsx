import LineupArtistRow from "./LineupArtistRow";

function LineupList({ artists, savedArtists, toggleSave }) {
  return (
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