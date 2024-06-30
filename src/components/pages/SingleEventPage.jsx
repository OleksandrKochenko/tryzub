import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEventById } from '../../redux/events/operations_';
import { getCurrentEvent, getLang } from '../../redux/selectors';
import { Icon } from '@iconify/react';

export const SingleEventPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentEvent = useSelector(getCurrentEvent);
  const lang = useSelector(getLang);

  useEffect(() => {
    dispatch(fetchEventById(id));
  }, [dispatch, id]);

  if (!currentEvent) {
    return <div>Loading...</div>;
  }

  const {
    coverImg,
    title,
    announce,
    description,
    startDate,
    endDate,
    address,
    contacts,
  } = currentEvent;

  const startDateFormat = new Date(startDate).toLocaleDateString(
    lang === 'en' ? 'en-EN' : 'ua-UA',
    {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  const endDateFormat = endDate
    ? new Date(endDate).toLocaleDateString(lang === 'en' ? 'en-EN' : 'ua-UA', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <img src={coverImg} alt={title[lang]} className="rounded shadow-lg" />
        <div>
          <h1 className="text-3xl font-bold mb-3">{title[lang]}</h1>
          <p className="text-xl text-gray-700 mb-5">{announce[lang]}</p>
          <div className="text-lg text-gray-800 mb-5">
            <p>
              <strong>Start Date:</strong> {startDateFormat}
            </p>
            {endDate && (
              <p>
                <strong>End Date:</strong> {endDateFormat}
              </p>
            )}
            <p>
              <strong>Address:</strong> {address[lang] || address.en}
            </p>
          </div>
          <div className="text-lg text-gray-800 mb-5">
            <h2 className="text-2xl font-semibold mb-3">Description</h2>
            <p>{description[lang]}</p>
          </div>
          {contacts && (
            <div className="text-lg text-gray-800 mb-5">
              <h2 className="text-2xl font-semibold mb-3">Contacts</h2>
              <p>
                <strong>Name:</strong> {contacts.name}
              </p>
              <p>
                <strong>Phone:</strong> {contacts.phone}
              </p>
              <p>
                <strong>Email:</strong> {contacts.email}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="px-6 py-4 flex flex-row items-center">
        <Icon icon="mdi:calendar-clock" className="text-indigo-600 mr-2" />
        <span className="text-lg text-gray-800">
          {startDateFormat} {endDate && `to ${endDateFormat}`}
        </span>
      </div>
      <div className="px-6 py-4 flex flex-row items-center">
        <Icon icon="mdi:map-marker" className="text-indigo-600 mr-2" />
        <span className="text-lg text-gray-800">
          {address[lang] || address.en}
        </span>
      </div>
    </div>
  );
};
