import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngle, faInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faAngleLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';



interface MangaPopupProps {
  images: string[];
  selectedImageIndex: number;
  onClose: () => void;
}

const PopupDetail: React.FC<MangaPopupProps> = ({ images, selectedImageIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(selectedImageIndex);

  const goToNextImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const goToNextImagekey = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImagekey = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handlePopupClose = () => {
    setCurrentIndex(selectedImageIndex);
    onClose();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handlePopupClose();
    } else if (e.key === 'ArrowLeft') {
      goToPreviousImagekey();
    } else if (e.key === 'ArrowRight') {
      goToNextImagekey();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  return (
    <div className="popup absolute inset-0 bg-black/90 z-30 flex items-center" onClick={handlePopupClose}>
      <button className="arrow left-arrow px-4 py-3 rounded-md absolute left-0 z-10 
      bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30
      " onClick={goToPreviousImage}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button className="arrow right-arrow px-4 py-3 rounded-md absolute right-0 z-10 
      bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30
      " onClick={goToNextImage}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <div className="wrap absolute inset-6 flex items-center justify-center">
        <Image
          src={images[currentIndex]} alt="image preview"
          style={{objectFit:"contain", maxHeight:'100%', maxWidth:"100%"}}
          fill
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      <button className="close-button absolute top-0 right-0  aspect-square px-4 py-3 " onClick={handlePopupClose}>
      <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

export default PopupDetail;