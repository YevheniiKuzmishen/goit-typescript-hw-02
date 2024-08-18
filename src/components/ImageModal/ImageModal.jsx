import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, onClose, largeImageURL }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {largeImageURL && (
        <div className={css.imageContainer}>
          <img src={largeImageURL} alt="Large image" className={css.image} />
        </div>
      )}
    </Modal>
  );
}
