import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Home from "./Views/Home";
import Lineup from "./Views/Lineup";
import Schedule from "./Views/Schedule";
import Map from "./Views/Map";
import Friends from "./Views/Friends";
import Notifications from "./Views/Notifications";
import Profile from "./Views/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="lineup" element={<Lineup />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="map" element={<Map />} />
        <Route path="friends" element={<Friends />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;