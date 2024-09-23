import { useDispatch, useSelector } from 'react-redux';
import { getEvents, getLang } from '../../redux/selectors';
import { fetchEventById } from '../../redux/events/operations_';

export const EventsList = ({ filtredEvents }) => {
  const dispatch = useDispatch();
  const lang = useSelector(getLang);
  const { currentEvent_ } = useSelector(getEvents);

  return filtredEvents ? (
    <ul>
      {filtredEvents.map(event => {
        const date = new Date(event.startDate);

        return (
          <li key={event._id} className="mb-4">
            <h3
              className={` hover:underline ${
                currentEvent_?._id === event._id && 'underline'
              } cursor-pointer `}
              onClick={() => dispatch(fetchEventById(event._id))}
            >
              {event.title[lang]}
            </h3>
            <div className="flex items-center text-xs text-gray-500">
              <p className="mr-2">
                {date.toLocaleDateString(`${lang}-${lang.toUpperCase()}`, {
                  timeZone: 'America/Winnipeg',
                })}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Loading...</p>
  );
};
