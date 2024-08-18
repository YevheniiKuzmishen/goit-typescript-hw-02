export default function ImageCard({ item, onClick }) {
  return (
    <div onClick={() => onClick(item.urls.regular)}>
      <img src={item.urls.small} alt={item.alt_description} />
    </div>
  );
}
