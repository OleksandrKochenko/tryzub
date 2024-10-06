import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../redux/selectors';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useEffect } from 'react';
import { fetchEventById } from '../../redux/events/operations_';
import { screens } from '../../data/constants';

export const Gallery = ({ filtredEvents }) => {
  const dispatch = useDispatch();
  const { currentEvent_ } = useSelector(getEvents);

  useEffect(() => {
    if (filtredEvents.length) {
      if (!currentEvent_ || !currentEvent_.gallery.length) {
        dispatch(fetchEventById(filtredEvents[0]._id));
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtredEvents.length]);

  const images = currentEvent_ && currentEvent_.gallery;
  const vw = window.innerWidth;

  return (
    <section className="bg-slate-200 flex justify-center items-center">
      {images ? (
        <ReactImageGallery
          items={images}
          showThumbnails={vw <= screens.sm ? false : true}
          thumbnailPosition={vw <= screens.sm ? 'bottom' : 'left'}
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
