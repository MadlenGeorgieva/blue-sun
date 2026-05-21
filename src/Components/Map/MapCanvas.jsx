import { useRef, useEffect } from "react";
import styles from "./MapCanvas.module.css";
import LiveMapImg from "../../assets/LiveMap.png";

// Interactive map component used on the map page
// The component supports zooming, map pins, friend locations, and an SOS button
function MapCanvas({
  activePins,
  friendPositions,
  friends,
  focusedFriend,
  onSosOpen,
}) {

  // References used for accessing the map container and map element directly
  const mapContainerRef = useRef(null);
  const mapInnerRef = useRef(null);

  // Stores the current zoom level and map position
  // useRef is used instead of useState to avoid unnecessary re-renders
  const scale = useRef(1);
  const translate = useRef({ x: 0, y: 0 });

  // Calculates the minimum zoom level needed
  // so the map always covers the visible screen area
  const getMinScale = () => {
    const container = mapContainerRef.current;
    const inner = mapInnerRef.current;

    if (!container || !inner) return 1;

    const scaleX = container.clientWidth / inner.clientWidth;
    const scaleY = container.clientHeight / inner.clientHeight;

    return Math.max(scaleX, scaleY);
  };

  // Applies the current zoom and movement values to the map
  // translate() moves the map and scale() handles zooming
  const applyTransform = () => {
    if (mapInnerRef.current) {
      mapInnerRef.current.style.transform = `
        translate(${translate.current.x}px, ${translate.current.y}px)
        scale(${scale.current})
      `;
    }
  };

  // Centers and scales the map after the image loads
  // This ensures the map starts correctly positioned on screen
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

  // Runs shortly after the component loads
  // Makes sure the map never becomes smaller than the container
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

  // Keeps the map inside the visible area while zooming
  // Prevents empty space from appearing around the map
  const clampTranslate = () => {
    const container = mapContainerRef.current;
    const inner = mapInnerRef.current;

    if (!container || !inner) return;

    const cw = container.clientWidth;
    const ch = container.clientHeight;

    const iw = inner.clientWidth * scale.current;
    const ih = inner.clientHeight * scale.current;

    translate.current.x = Math.min(
      0,
      Math.max(Math.min(0, cw - iw), translate.current.x)
    );

    translate.current.y = Math.min(
      0,
      Math.max(Math.min(0, ch - ih), translate.current.y)
    );
  };

  // Zoom button controls
  const zoomIn = () => {
    scale.current = Math.min(4, scale.current + 0.5);

    clampTranslate();
    applyTransform();
  };

  const zoomOut = () => {
    scale.current = Math.max(
      getMinScale(),
      scale.current - 0.5
    );

    clampTranslate();
    applyTransform();
  };

  return (

    // Main map container
    <div
      className={styles.mapContainer}
      ref={mapContainerRef}
    >

      {/* Inner map element that moves and scales */}
      <div
        className={styles.mapInner}
        ref={mapInnerRef}
      >
        <img
          src={LiveMapImg}
          alt="Festival Map"
          className={styles.mapImg}
          draggable={false}
          onLoad={handleMapLoad}
        />

        {/* Displays active map pins */}
        {activePins.map((pin) => (
          <div
            key={pin.id}
            className={styles.pin}
            style={{
              left: `${pin.x}%`,
              top: `${pin.y}%`,
            }}
          >
            <div className={styles.pinDot} />

            <span className={styles.pinLabel}>
              {pin.label}
            </span>
          </div>
        ))}

        {/* Displays friend location bubbles */}
        {friends.map((friend, i) => (
          <div
            key={friend.name}
            className={`${styles.friendBubble} ${
              focusedFriend === i
                ? styles.focusedBubble
                : ""
            }`}
            style={{
              left: `${friendPositions[i].x}%`,
              top: `${friendPositions[i].y}%`,
              transition: "left 1.8s ease, top 1.8s ease",
            }}
          >
            <img
              src={friend.image}
              alt={friend.name}
            />
          </div>
        ))}
      </div>

      {/* Zoom control buttons */}
      <div className={styles.zoomButtons}>
        <button onClick={zoomIn}>+</button>
        <button onClick={zoomOut}>−</button>
      </div>

      {/* SOS emergency button */}
      <button
        className={styles.sosButton}
        onClick={onSosOpen}
      >
        SOS
      </button>
    </div>
  );
}

export default MapCanvas;