import { Image } from "../../types";

interface ImageCardProps {
  item: Image;
  onClick: (url: string) => void;
}

export default function ImageCard({ item, onClick }: ImageCardProps) {
  return (
    <div onClick={() => onClick(item.urls.regular)}>
      <img src={item.urls.small} alt={item.alt_description} />
    </div>
  );
}
