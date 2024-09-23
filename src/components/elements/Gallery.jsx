import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../redux/selectors';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useEffect } from 'react';
import { fetchEventById } from '../../redux/events/operations_';

export const Gallery = ({ filtredEvents }) => {
  const dispatch = useDispatch();
  const { currentEvent_ } = useSelector(getEvents);

  useEffect(() => {
    if (!currentEvent_ || !currentEvent_.gallery.length)
      dispatch(fetchEventById(filtredEvents[0]._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const images = currentEvent_ && currentEvent_.gallery;

  return (
    <section className="bg-slate-200 flex justify-center items-center">
      {images ? (
        <ReactImageGallery
          items={images}
          thumbnailPosition="left"
          showBullets
          lazyLoad
        />
      ) : (
        // a skeleton should be here
        'Loading...'
      )}
    </section>
  );
};
