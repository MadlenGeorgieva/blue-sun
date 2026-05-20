import { useRef, useEffect } from "react";
import styles from "./MapCanvas.module.css";
import LiveMapImg from "../assets/LiveMap.png";

function MapCanvas({ activePins, friendPositions, friends, focusedFriend, onSosOpen }) {
  const mapContainerRef = useRef(null);
  const mapInnerRef = useRef(null);
  const scale = useRef(1);
  const translate = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastDist = useRef(null);

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

  const clampTranslate = () => {
    const container = mapContainerRef.current;
    const inner = mapInnerRef.current;
    if (!container || !inner) return;
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const iw = inner.clientWidth * scale.current;
    const ih = inner.clientHeight * scale.current;
    translate.current.x = Math.min(0, Math.max(Math.min(0, cw - iw), translate.current.x));
    translate.current.y = Math.min(0, Math.max(Math.min(0, ch - ih), translate.current.y));
  };

  const onMouseDown = (e) => { isDragging.current = true; lastPos.current = { x: e.clientX, y: e.clientY }; };
  const onMouseUp = () => { isDragging.current = false; };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const container = mapContainerRef.current;
    const inner = mapInnerRef.current;
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const iw = inner.clientWidth * scale.current;
    const ih = inner.clientHeight * scale.current;
    translate.current.x = Math.min(0, Math.max(Math.min(0, cw - iw), translate.current.x + e.clientX - lastPos.current.x));
    translate.current.y = Math.min(0, Math.max(Math.min(0, ch - ih), translate.current.y + e.clientY - lastPos.current.y));
    lastPos.current = { x: e.clientX, y: e.clientY };
    applyTransform();
  };

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
      translate.current.x = Math.min(0, Math.max(Math.min(0, cw - iw), translate.current.x + e.touches[0].clientX - lastPos.current.x));
      translate.current.y = Math.min(0, Math.max(Math.min(0, ch - ih), translate.current.y + e.touches[0].clientY - lastPos.current.y));
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

  const zoomIn = () => { scale.current = Math.min(4, scale.current + 0.3); clampTranslate(); applyTransform(); };
  const zoomOut = () => { scale.current = Math.max(getMinScale(), scale.current - 0.1); clampTranslate(); applyTransform(); };

  return (
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
        <img src={LiveMapImg} alt="Festival Map" className={styles.mapImg} draggable={false} onLoad={handleMapLoad} />

        {activePins.map((pin) => (
          <div key={pin.id} className={styles.pin} style={{ left: `${pin.x}%`, top: `${pin.y}%` }}>
            <div className={styles.pinDot} />
            <span className={styles.pinLabel}>{pin.label}</span>
          </div>
        ))}

        {friends.map((friend, i) => (
          <div
            key={friend.name}
            className={`${styles.friendBubble} ${focusedFriend === i ? styles.focusedBubble : ""}`}
            style={{ left: `${friendPositions[i].x}%`, top: `${friendPositions[i].y}%`, transition: "left 1.8s ease, top 1.8s ease" }}
          >
            <img src={friend.image} alt={friend.name} />
          </div>
        ))}
      </div>

      <div className={styles.zoomButtons}>
        <button onClick={zoomIn}>+</button>
        <button onClick={zoomOut}>−</button>
      </div>

      <button className={styles.sosButton} onClick={onSosOpen}>SOS</button>
    </div>
  );
}

export default MapCanvas;