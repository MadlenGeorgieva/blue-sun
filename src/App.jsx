import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Views/Home";
import Lineup from "./Views/Lineup";
import Map from "./Views/Map";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="lineup" element={<Lineup />} />
        <Route path="map" element={<Map />} />
      </Route>
    </Routes>
  );
}

export default App;