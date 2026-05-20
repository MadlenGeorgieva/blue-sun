import styles from "./ScannerUpload.module.css";
import uploadIcon from "../../assets/upload.png";

function ScannerUpload({ fileInputRef, onUploadClick, onFileChange }) {
  return (
    <>
      <button className={styles.uploadButton} onClick={onUploadClick}>
        <img src={uploadIcon} alt="" />
        <span>Upload picture from your Gallery</span>
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