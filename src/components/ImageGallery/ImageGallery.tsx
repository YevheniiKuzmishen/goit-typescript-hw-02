import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../../types";

interface ImageGalleryProps {
  items: Image[];
  onImageClick: (url: string) => void;
}

export default function ImageGallery({
  items,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {items.map((item) => (
        <li className={css.item} key={item.id}>
          <ImageCard item={item} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
