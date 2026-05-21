import styles from "./ScannerUpload.module.css";
import uploadIcon from "../../assets/upload.png";

// Component used for uploading images from the user's device
function ScannerUpload({
  fileInputRef,
  onUploadClick,
  onFileChange,
}) {
  return (
    <>

      {/* Upload section */}
      <button
        className={styles.uploadButton}
        onClick={onUploadClick}
      >
        <img src={uploadIcon} alt="" />

        <span>
          Upload picture from your Gallery
        </span>
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className={styles.fileInput}
        onChange={onFileChange}
      />
    </>
  );
}

export default ScannerUpload;