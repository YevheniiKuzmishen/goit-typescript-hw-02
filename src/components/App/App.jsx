import { useState, useEffect, useRef } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchImages } from "../../images-api";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const scrollPositionRef = useRef(0);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (images.length > 0 && galleryRef.current) {
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: "auto",
      });
    }
  }, [images, loading]);

  const handleSearchSubmit = async (newQuery) => {
    if (newQuery.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }

    setLoading(true);
    setError(null);
    setQuery(newQuery);
    setPage(1);
    try {
      const results = await fetchImages(newQuery, 1);
      setImages(results);
    } catch (error) {
      setError("Failed to fetch images");
      toast.error("Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = async () => {
    scrollPositionRef.current = window.pageYOffset;

    setLoading(true);
    try {
      const nextPage = page + 1;
      const results = await fetchImages(query, nextPage);
      setImages((prevImages) => [...prevImages, ...results]);
      setPage(nextPage);
    } catch (error) {
      setError("Failed to fetch images");
      toast.error("Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (largeImageURL) => {
    setLargeImageURL(largeImageURL);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setLargeImageURL(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!error && images.length > 0 && (
        <>
          <ImageGallery items={images} onImageClick={handleImageClick} />
          <LoadMoreBtn onClick={loadMoreImages} />
        </>
      )}
      <ImageModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        largeImageURL={largeImageURL}
      />
      <Toaster />
    </div>
  );
}
