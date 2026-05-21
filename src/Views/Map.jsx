import { useState, useEffect } from "react";
import styles from "./Map.module.css";
import nannaImg from "../assets/Nanna.jpg";
import frejaImg from "../assets/Freja.jpg";
import PageTitle from "../Components/PageTitle";
import MapCanvas from "../Components/Map/MapCanvas";
import MapFilters from "../Components/Map/MapFilters";
import FriendsNearby from "../Components/Map/FriendsNearby";
import SosModal from "../Components/Map/SosModal";
import Toast from "../Components/Map/Toast";

const CATEGORIES = ["None", "All", "Stages", "Food", "Chargers", "Rest Zones", "Toilets"];

const PINS = {
  Stages: [
    { id: "stage1", label: "Main Stage", x: 67, y: 40 },
    { id: "stage2", label: "Wonder Blue", x: 20, y: 28 },
    { id: "stage3", label: "The Dragoon", x: 29, y: 95 },
  ],
  Food: [
    { id: "food1", label: "Food Court", x: 43, y: 60 },
    { id: "food2", label: "Market", x: 22, y: 55 },
    { id: "food3", label: "Bar", x: 50, y: 83 },
  ],
  Chargers: [
    { id: "charger1", label: "Charger A", x: 41, y: 38 },
    { id: "charger2", label: "Charger B", x: 13, y: 65 },
  ],
  "Rest Zones": [
    { id: "rest1", label: "Chill Zone", x: 70, y: 72 },
    { id: "rest2", label: "Shade Area", x: 17, y: 75 },
  ],
  Toilets: [
    { id: "toilet1", label: "Toilet A", x: 90, y: 39 },
    { id: "toilet2", label: "Toilet B", x: 90, y: 77 },
  ],
};

const friends = [
  { name: "Nanna", image: nannaImg, startX: 40, startY: 45 },
  { name: "Freja", image: frejaImg, startX: 60, startY: 55 },
];

function Map() {
  const [sosOpen, setSosOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("None");
  const [focusedFriend, setFocusedFriend] = useState(null);
  const [friendPositions, setFriendPositions] = useState(
    friends.map((f) => ({ x: f.startX, y: f.startY }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFriendPositions((prev) =>
        prev.map((pos) => ({
          x: Math.min(90, Math.max(10, pos.x + (Math.random() - 0.5) * 1.5)),
          y: Math.min(90, Math.max(10, pos.y + (Math.random() - 0.5) * 1.5)),
        }))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const focusFriend = (index) => {
    setFocusedFriend(index === focusedFriend ? null : index);
  };

  const handleSosSelect = (type) => {
  setSosOpen(false);
  setToastMessage(null);
  setTimeout(() => {
    setToastMessage(
      type === "medical"
        ? "Your medical SOS was sent successfully. Nearby staff have been alerted."
        : "Festival staff have been notified and will assist you shortly."
    );
  }, 50);
};

  const activePins =
    activeCategory === "All"
      ? Object.values(PINS).flat()
      : activeCategory === "None"
      ? []
      : PINS[activeCategory] || [];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PageTitle title="MAP" />
        <MapFilters categories={CATEGORIES} activeCategory={activeCategory} onSelect={setActiveCategory} />
        <MapCanvas
          activePins={activePins}
          friendPositions={friendPositions}
          friends={friends}
          focusedFriend={focusedFriend}
          onSosOpen={() => setSosOpen(true)}
        />
        <FriendsNearby friends={friends} focusedFriend={focusedFriend} onFocusFriend={focusFriend} />
        {sosOpen && <SosModal onClose={() => setSosOpen(false)} onSelect={handleSosSelect} />}
        {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}
      </main>
    </div>
  );
}

export default Map;