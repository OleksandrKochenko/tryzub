import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getEvents } from '../../redux/selectors';
import { fetchPhotos } from '../../redux/events/operations';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const Gallery = () => {
  const { currentEvent } = useSelector(getEvents);
  const dispatch = useDispatch();

  const images = currentEvent.photos?.hits?.map(el => {
    return {
      original: el.largeImageURL,
      thumbnail: el.previewURL,
    };
  });

  useEffect(() => {
    currentEvent.title !== '' && dispatch(fetchPhotos(currentEvent.title));
  }, [currentEvent.title, dispatch]);

  return (
    <section className="bg-slate-200 w-full flex justify-center items-center">
      {images ? <ReactImageGallery items={images} /> : 'Loading...'}
    </section>
  );
};
