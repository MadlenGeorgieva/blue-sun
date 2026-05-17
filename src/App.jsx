import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./Layout";

import Home from "./Views/Home";
import Lineup from "./Views/Lineup";
import Schedule from "./Views/Schedule";
import Map from "./Views/Map";
import Friends from "./Views/Friends";
import Notifications from "./Views/Notifications";
import Profile from "./Views/Profile";

import SaveUsImg from "./assets/SaveUs.jpg";
import GallopDerbyImg from "./assets/GallopDerby.png";
import GnawImg from "./assets/Gnaw.png";
import MarieFrankImg from "./assets/MarieFrank.png";
import AnastasiaImg from "./assets/Anastasia.png";
import NaturalBornImg from "./assets/NaturalBorn.png";
import SeniorCitizensImg from "./assets/SeniorCitizens.png";
import SmugImg from "./assets/Smug.png";
import CarolineMousingImg from "./assets/CarolineMousing.png";


const ALL_ARTISTS = [
  { time: "11:45", name: "SaveUs", stage: "Wonder blue", image: SaveUsImg, },
  { time: "12:45", name: "Gallop Derby", stage: "The Dragoon", image: GallopDerbyImg },
  { time: "12:50", name: "Natural Born Hippies", stage: "The city festival", image: NaturalBornImg },
  { time: "13:45", name: "Gnaw", stage: "Wonder blue", image: GnawImg },
  { time: "14:00", name: "Marie Frank", stage: "The birch grove", image: MarieFrankImg },
  { time: "15:10", name: "Senior Citizens", stage: "The city festival", image: SeniorCitizensImg },
  { time: "15:15", name: "Anastasia", stage: "The birch grove", image: AnastasiaImg },
  { time: "15:20", name: "Caroline Mousing", stage: "The Dragoon", image: CarolineMousingImg },
  { time: "16:20", name: "Smug", stage: "The birch grove", image: SmugImg },
];

function App() {
  const [savedArtists, setSavedArtists] = useState(
    Object.fromEntries(ALL_ARTISTS.map((a) => [a.name, false]))
  );

  const toggleSave = (name) => {
    setSavedArtists((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="lineup" element={<Lineup artists={ALL_ARTISTS} savedArtists={savedArtists} toggleSave={toggleSave} />} />
        <Route path="schedule" element={<Schedule artists={ALL_ARTISTS} savedArtists={savedArtists} toggleSave={toggleSave} />} />
        <Route path="map" element={<Map />} />
        <Route path="friends" element={<Friends />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;