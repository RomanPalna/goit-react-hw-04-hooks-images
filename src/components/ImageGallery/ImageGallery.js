import React from 'react';
import ImageGaleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGalerry({ images, openModal }) {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGaleryItem openModal={openModal} key={image.id} image={image} />
        ))}
      </ul>
    </div>
  );
}

export default ImageGalerry;
