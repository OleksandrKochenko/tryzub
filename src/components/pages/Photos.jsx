import { EventsList } from 'components/elements/EventsList';
import { Gallery } from 'components/elements/Gallery';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/events/operations_';
import { getEvents } from '../../redux/selectors';

export const PhotosPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { events_ } = useSelector(getEvents);
  const filtredEvents = events_?.length
    ? [...events_].filter(el => el.gallery?.length > 0)
    : null;

  return filtredEvents ? (
    <div className="flex w-full">
      <section className="w-[20%]  p-4 ">
        <h2 className="flex flex-col mb-4 italic">
          <span className="text-3xl uppercase w-full tracking-[6px]">
            A picture
          </span>
          <span>is worth a thousand words</span>
        </h2>
        <EventsList filtredEvents={filtredEvents} />
      </section>
      <Gallery filtredEvents={filtredEvents} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};
