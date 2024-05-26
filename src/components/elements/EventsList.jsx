import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../redux/selectors';
import { setCurrentEvent } from '../../redux/events/slice';

export const EventsList = () => {
  const { events, currentEvent } = useSelector(getEvents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentEvent(events[0]));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {events.map((event, idx) => {
        return (
          <li key={idx} className="mb-4">
            <h3
              className={`uppercase hover:underline cursor-pointer ${
                event.title === currentEvent.title ? 'underline' : ''
              }`}
              onClick={() => dispatch(setCurrentEvent(event))}
            >
              {event.title}
            </h3>
            <div className="flex items-center text-xs text-gray-500">
              <p className="mr-2">{event.date}</p>
              <Icon icon="ep:location" />
              <p className="capitalize">{event.location}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
