import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Map.module.css";
import nannaImg from "../assets/Nanna.jpg";
import frejaImg from "../assets/Freja.jpg";
import LiveMapImg from "../assets/LiveMap.png";
import PageTitle from "../Components/PageTitle";

const CATEGORIES = ["None", "All", "Stages", "Food", "Chargers", "Rest Zones", "Toilets"];

const PINS = {
  Stages: [
    { id: "stage1", label: "Main Stage", x: 62, y: 40 },
    { id: "stage2", label: "Wonder Blue", x: 25, y: 54 },
    { id: "stage3", label: "The Dragoon", x: 38, y: 78 },
  ],
  Food: [
    { id: "food1", label: "Food Court", x: 62, y: 60 },
    { id: "food2", label: "Market", x: 35, y: 52 },
    { id: "food3", label: "Bar", x: 52, y: 73 },
  ],
  Chargers: [
    { id: "charger1", label: "Charger A", x: 72, y: 25 },
    { id: "charger2", label: "Charger B", x: 20, y: 70 },
  ],
  "Rest Zones": [
    { id: "rest1", label: "Chill Zone", x: 64, y: 66 },
    { id: "rest2", label: "Shade Area", x: 31, y: 66 },
  ],
  Toilets: [
    { id: "toilet1", label: "Toilet A", x: 76, y: 45 },
    { id: "toilet2", label: "Toilet B", x: 76, y: 68 },
  ],
};

const friends = [
  { name: "Nanna", image: nannaImg, startX: 40, startY: 45 },
  { name: "Freja", image: frejaImg, startX: 60, startY: 55 },
];

function Map() {
  const [sosOpen, setSosOpen] = useState(false);
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("None");
  const [focusedFriend, setFocusedFriend] = useState(null);
  const [friendPositions, setFriendPositions] = useState(
    friends.map((f) => ({ x: f.startX, y: f.startY }))
  );

  const mapContainerRef = useRef(null);
  const scale = useRef(1);
  const translate = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastDist = useRef(null);
  const mapInnerRef = useRef(null);

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

  useEffect(() => {
  const timer = setTimeout(() => {
    const min = getMinScale();
    if (scale.current < min) {
      scale.current = min;
      applyTransform();
    }
  }, 100);
  return () => clearTimeout(timer);
}, []);

  const getMinScale = () => {
    const container = mapContainerRef.current;
    const inner = mapInnerRef.current;
    if (!container || !inner) return 1;
    const scaleX = container.clientWidth / inner.clientWidth;
    const scaleY = container.clientHeight / inner.clientHeight;
    return Math.max(scaleX, scaleY);
  };

  const applyTransform = () => {
    if (mapInnerRef.current) {
      mapInnerRef.current.style.transform = `translate(${translate.current.x}px, ${translate.current.y}px) scale(${scale.current})`;
    }
  };

  const handleMapLoad = () => {
  const min = getMinScale();
  scale.current = min;
  const container = mapContainerRef.current;
  const inner = mapInnerRef.current;
  if (container && inner) {
    const scaledW = inner.clientWidth * min;
    const scaledH = inner.clientHeight * min;
    translate.current = {
      x: (container.clientWidth - scaledW) / 2,
      y: (container.clientHeight - scaledH) / 2,
    };
  }
  applyTransform();
};

  const clampTranslate = () => {
    const container = mapContainerRef.current;
    const inner = mapInnerRef.current;
    if (!container || !inner) return;
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const iw = inner.clientWidth * scale.current;
    const ih = inner.clientHeight * scale.current;
    const maxX = 0;
    const minX = Math.min(0, cw - iw);
    const maxY = 0;
    const minY = Math.min(0, ch - ih);
    translate.current.x = Math.min(maxX, Math.max(minX, translate.current.x));
    translate.current.y = Math.min(maxY, Math.max(minY, translate.current.y));
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const container = mapContainerRef.current;
    const inner = mapInnerRef.current;
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const iw = inner.clientWidth * scale.current;
    const ih = inner.clientHeight * scale.current;
    const maxX = 0;
    const minX = Math.min(0, cw - iw);
    const maxY = 0;
    const minY = Math.min(0, ch - ih);
    translate.current.x = Math.min(maxX, Math.max(minX, translate.current.x + e.clientX - lastPos.current.x));
    translate.current.y = Math.min(maxY, Math.max(minY, translate.current.y + e.clientY - lastPos.current.y));
    lastPos.current = { x: e.clientX, y: e.clientY };
    applyTransform();
  };

  const onMouseUp = () => { isDragging.current = false; };

  const onTouchStart = (e) => {
    if (e.touches.length === 1) {
      isDragging.current = true;
      lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else if (e.touches.length === 2) {
      isDragging.current = false;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastDist.current = Math.sqrt(dx * dx + dy * dy);
    }
  };

  const onTouchMove = (e) => {
    if (e.touches.length === 1 && isDragging.current) {
      const container = mapContainerRef.current;
      const inner = mapInnerRef.current;
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      const iw = inner.clientWidth * scale.current;
      const ih = inner.clientHeight * scale.current;
      const maxX = 0;
      const minX = Math.min(0, cw - iw);
      const maxY = 0;
      const minY = Math.min(0, ch - ih);
      translate.current.x = Math.min(maxX, Math.max(minX, translate.current.x + e.touches[0].clientX - lastPos.current.x));
      translate.current.y = Math.min(maxY, Math.max(minY, translate.current.y + e.touches[0].clientY - lastPos.current.y));
      lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      applyTransform();
    } else if (e.touches.length === 2 && lastDist.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      scale.current = Math.min(4, Math.max(getMinScale(), scale.current * (dist / lastDist.current)));
      lastDist.current = dist;
      clampTranslate();
      applyTransform();
    }
  };

  const onTouchEnd = () => { isDragging.current = false; lastDist.current = null; };

  const zoomIn = () => {
    scale.current = Math.min(4, scale.current + 0.3);
    clampTranslate();
    applyTransform();
  };

  const zoomOut = () => {
    const min = getMinScale();
    scale.current = Math.max(min, scale.current - 0.1);
    clampTranslate();
    applyTransform();
  };

  const focusFriend = (index) => {
    setFocusedFriend(index === focusedFriend ? null : index);
    const pos = friendPositions[index];
    const container = mapContainerRef.current;
    if (!container) return;
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    scale.current = 2.5;
    translate.current = {
      x: cw / 2 - (pos.x / 100) * cw * scale.current,
      y: ch / 2 - (pos.y / 100) * ch * scale.current,
    };
    applyTransform();
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

        <nav className={styles.tabs}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${activeCategory === cat ? styles.activeTab : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div
          className={styles.mapContainer}
          ref={mapContainerRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className={styles.mapInner} ref={mapInnerRef}>
            <img
              src={LiveMapImg}
              alt="Festival Map"
              className={styles.mapImg}
              draggable={false}
              onLoad={handleMapLoad}
            />

            {activePins.map((pin) => (
              <div
                key={pin.id}
                className={styles.pin}
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              >
                <div className={styles.pinDot} />
                <span className={styles.pinLabel}>{pin.label}</span>
              </div>
            ))}

            {friends.map((friend, i) => (
              <div
                key={friend.name}
                className={`${styles.friendBubble} ${focusedFriend === i ? styles.focusedBubble : ""}`}
                style={{
                  left: `${friendPositions[i].x}%`,
                  top: `${friendPositions[i].y}%`,
                  transition: "left 1.8s ease, top 1.8s ease",
                }}
              >
                <img src={friend.image} alt={friend.name} />
              </div>
            ))}
          </div>

          <div className={styles.zoomButtons}>
            <button onClick={zoomIn}>+</button>
            <button onClick={zoomOut}>−</button>
          </div>

          <button className={styles.sosButton} onClick={() => setSosOpen(true)}>
            SOS
          </button>
        </div>

        <div className={styles.friendsBar}>
          <div className={styles.friendsCount}>
            <span className={styles.friendsNum}>{friends.length}</span>
            <span className={styles.friendsLabel}>Friends Nearby</span>
          </div>
          <div className={styles.friendAvatars}>
            {friends.map((friend, i) => (
              <button
                key={friend.name}
                className={`${styles.avatarButton} ${focusedFriend === i ? styles.activeAvatar : ""}`}
                onClick={() => focusFriend(i)}
              >
                <img src={friend.image} alt={friend.name} />
              </button>
            ))}
          </div>
        </div>
        {sosOpen && (
  <div className={styles.sosOverlay} onClick={() => setSosOpen(false)}>
    <div className={styles.sosModal} onClick={(e) => e.stopPropagation()}>
      <h2 className={styles.sosTitle}>Need Help?</h2>
      <p className={styles.sosText}>Your live location will be shared with festival staff.</p>
      <div className={styles.sosOptions}>
        <button className={styles.sosOption}>
          <h3>Medical</h3>
          <p>Injury, illness, overdose.</p>
        </button>
        <button className={styles.sosOption}>
          <h3>General</h3>
          <p>Lost, harassment, other.</p>
        </button>
      </div>
      <button className={styles.sosClose} onClick={() => setSosOpen(false)}>Cancel</button>
    </div>
  </div>
)}
      </main>
    </div>
  );
}

export default Map;