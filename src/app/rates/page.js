"use client";

import { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

const images = [
    '/IMG_1781.jpg',
    '/DSC_1159.jpg',
    'DSC_1095.jpg',
];

export default function Rates() {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {images.map((src, index) => (
                <img
                key={index}
                src={src}
                onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
                style={{ cursor: 'pointer', width: '100px', margin: '5px' }}
                alt={`Image ${index + 1}`}
                />
            ))}

            {isOpen && (
                <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                    setPhotoIndex((photoIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images.length)
                }
                />
            )}
        </div>
    )
}
