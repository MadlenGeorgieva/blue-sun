import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Home from "./Views/Home";
<<<<<<< HEAD
import Lineup from "./Views/Lineup";
import Schedule from "./Views/Schedule";
=======
import LineUp from "./Views/LineUp";
>>>>>>> 1de18d779bb3b899697b248072ef39a8d640aa0b
import Map from "./Views/Map";
import Friends from "./Views/Friends";
import Notifications from "./Views/Notifications";
import Profile from "./Views/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
<<<<<<< HEAD

        <Route path="lineup" element={<Lineup />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="map" element={<Map />} />
        <Route path="friends" element={<Friends />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
=======
        <Route path="lineup" element={<LineUp />} />
        <Route path="map" element={<Map />} />    
>>>>>>> 1de18d779bb3b899697b248072ef39a8d640aa0b
      </Route>
    </Routes>
  );
}

export default App;