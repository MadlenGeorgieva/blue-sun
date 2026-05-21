import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Components/Header";

import ScannerMedia from "../Components/Scanner/ScannerMedia";
import ScannerOverlay from "../Components/Scanner/ScannerOverlay";
import ScannerText from "../Components/Scanner/ScannerText";
import ScannerFrame from "../Components/Scanner/ScannerFrame";
import ScannerUpload from "../Components/Scanner/ScannerUpload";
import ScannerFooter from "../Components/Scanner/ScannerFooter";

import styles from "./Scanner.module.css";

import closeIcon from "../assets/close.png";
import flashIcon from "../assets/flash.png";

// Handles camera access, uploaded image preview,
// scanner layout, and scanner page navigation
function Scanner() {
  const navigate = useNavigate();

  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  const [previewImage, setPreviewImage] = useState(null);
  const [flashOn, setFlashOn] = useState(false);

  // Starts the device camera when the scanner page opens
  // The cleanup function stops the camera when the user leaves the page
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

  // Handles scanner actions such as flash toggle and image upload
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

      {/* Main scanner area with camera, overlay, frame, text, and upload option */}
      <main className={styles.content}>
        <ScannerMedia
          videoRef={videoRef}
          previewImage={previewImage}
        />

        <ScannerOverlay />

        <ScannerText />

        <ScannerFrame />

        <ScannerUpload
          fileInputRef={fileInputRef}
          onUploadClick={handleUploadClick}
          onFileChange={handleFileChange}
        />
      </main>

      <ScannerFooter />
    </section>
  );
}

export default Scanner;