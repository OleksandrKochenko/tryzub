import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import { getEvents, getLang } from '../../redux/selectors';

export const EventsList = () => {
  const { events_ } = useSelector(getEvents);
  const oneEvent = [...events_].filter(
    el => el._id === '66ca32de1ac9187ce6b8b711'
  );

  const lang = useSelector(getLang);

  return events_.length !== 0 ? (
    <ul>
      {oneEvent.map(event => {
        const date = new Date(event.startDate);

        return (
          <li key={event._id} className="mb-4">
            <h3
              className={`uppercase hover:underline cursor-pointer `}
              onClick={() => console.log('clicked')}
            >
              {event.title[lang]}
            </h3>
            <div className="flex items-center text-xs text-gray-500">
              <p className="mr-2">{date.toDateString()}</p>
              <Icon icon="ep:location" />
              <p className="capitalize">{event.address.en}</p>
            </div>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Loading...</p>
  );
};
