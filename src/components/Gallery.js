"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

/**
 * Renders a gallery component with lightbox functionality.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.images - An array of image URLs.
 * @param {string} props.className - The CSS class name for the gallery container.
 * @param {string} props.imageClassName - The CSS class name for the gallery images.
 * @returns {JSX.Element} The gallery component.
 */
export default function Gallery({ images = [], className, imageClassName }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setImageLoaded(false);
      const img = document.createElement('img');
      img.src = images[photoIndex];
      img.onload = () => setImageLoaded(true);
      img.onerror = () => console.error(`Failed to load image: ${images[photoIndex]}`);
    }
  }, [isOpen, photoIndex, images]);

  /**
   * Opens the lightbox with the specified image index.
   *
   * @param {number} index - The index of the image to open.
   */
  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className={className}>
      {Array.isArray(images) && images.map((src, index) => (
        <a key={index} onClick={() => openLightbox(index)} className={imageClassName}>
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={800}
            height={600}
            className="cursor-pointer w-full h-full object-cover"
          />
        </a>
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => {
            setPhotoIndex((photoIndex + images.length - 1) % images.length);
            setImageLoaded(false);
          }}
          onMoveNextRequest={() => {
            setPhotoIndex((photoIndex + 1) % images.length);
            setImageLoaded(false);
          }}
          reactModalStyle={{
            overlay: { zIndex: 2000 },
            content: {
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            },
          }}
        />
      )}
    </div>
  );
}