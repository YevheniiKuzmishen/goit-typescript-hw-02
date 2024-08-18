import Modal from "react-modal";
import css from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  largeImageURL: string | null;
}

export default function ImageModal({
  isOpen,
  onClose,
  largeImageURL,
}: ImageModalProps) {
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
