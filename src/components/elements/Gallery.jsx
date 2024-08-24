import { useSelector } from 'react-redux';
import { getEvents } from '../../redux/selectors';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const Gallery = () => {
  const { events_ } = useSelector(getEvents);
  const oneEvent = [...events_].filter(
    el => el._id === '66ca32de1ac9187ce6b8b711'
  );
  const images = oneEvent[0] && oneEvent[0].gallery;

  return (
    <section className="bg-slate-200 w-full flex justify-center items-center">
      {images ? <ReactImageGallery items={images} /> : 'Loading...'}
    </section>
  );
};
