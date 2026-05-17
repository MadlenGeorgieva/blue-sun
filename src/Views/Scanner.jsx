import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Components/Header";

import styles from "./Scanner.module.css";

import closeIcon from "../assets/close.png";
import flashIcon from "../assets/flash.png";
import uploadIcon from "../assets/upload.png";

function Scanner() {
  const navigate = useNavigate();

  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  const [previewImage, setPreviewImage] = useState(null);
  const [flashOn, setFlashOn] = useState(false);

  useEffect(() => {
    let stream;

    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch (error) {
        console.log("Camera error:", error);
      }
    }

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const toggleFlash = () => {
    setFlashOn(!flashOn);
    console.log("Flash toggled");
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
  };

  return (
    <section className={styles.page}>
      <Header
        leftIcon={closeIcon}
        rightIcon={flashIcon}
        onLeftClick={() => navigate(-1)}
        onRightClick={toggleFlash}
      />

      <main className={styles.content}>
        {previewImage ? (
          <img className={styles.camera} src={previewImage} alt="" />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={styles.camera}
          />
        )}

        <div className={styles.overlayTop}></div>
        <div className={styles.overlayLeft}></div>
        <div className={styles.overlayRight}></div>
        <div className={styles.overlayBottom}></div>

        <div className={styles.text}>
          <h1>
            Scan your
            <br />
            Friend’s Ticket QR
          </h1>

          <p>Center the QR code in the frame</p>
        </div>

        <div className={styles.scanFrame}>
          <span className={styles.cornerTopLeft}></span>
          <span className={styles.cornerTopRight}></span>
          <span className={styles.cornerBottomLeft}></span>
          <span className={styles.cornerBottomRight}></span>
        </div>

        <button className={styles.uploadButton} onClick={handleUploadClick}>
          <img src={uploadIcon} alt="" />
          <span>Upload picture from your Gallery</span>
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className={styles.fileInput}
          onChange={handleFileChange}
        />
      </main>

      <footer className={styles.footer}>
        <button className={styles.scanButton}></button>
      </footer>
    </section>
  );
}

export default Scanner;