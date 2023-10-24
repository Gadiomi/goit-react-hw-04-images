import ImageGalleryItem from '../ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items }) => {
  return (
    <>
      <ul className={css.gallery}>
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
