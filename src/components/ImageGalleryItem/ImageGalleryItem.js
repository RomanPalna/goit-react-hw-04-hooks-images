const ImageGaleryItem = ({ image, openModal }) => {
  const { webformatURL, tags } = image;

  return (
    <li id={image.id} onClick={openModal} className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGaleryItem;
