import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEventById } from '../../redux/events/operations_';
import { getCurrentEvent, getLang } from '../../redux/selectors';
import { Icon } from '@iconify/react';
import { formatTimeAndDate } from 'data/helpers';

export const SingleEventPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentEvent = useSelector(getCurrentEvent);
  const lang = useSelector(getLang);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    dispatch(fetchEventById(id));
  }, [dispatch, id]);

  if (!currentEvent) {
    return <div>Loading...</div>;
  }

  const {
    coverImg,
    title,
    //announce,
    description,
    pressRelease,
    startDate,
    endDate,
    address,
    contacts,
  } = currentEvent;

  const timeAndDate = formatTimeAndDate(startDate, endDate, lang);

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <img src={coverImg} alt={title[lang]} className="rounded shadow-lg" />
        <div>
          <h1 className="text-3xl font-bold mb-3">{title[lang]}</h1>
          {/* <p className="text-xl text-gray-700 mb-5">{announce[lang]}</p> */}
          <div className="text-lg text-gray-800 mb-5">
            <div className="py-2 flex flex-row items-center">
              <Icon
                icon="mdi:calendar-clock"
                className="text-indigo-600 mr-2"
              />
              <span className="text-sm font-semibold text-indigo-600">
                {timeAndDate}
              </span>
            </div>
            <div className=" py-2 flex flex-row items-center">
              <Icon icon="mdi:map-marker" className="text-indigo-600 mr-2" />
              <span className="text-sm font-semibold text-indigo-600">
                {address[lang] || address.en}
              </span>
            </div>
          </div>
          <div className="text-lg text-gray-800 mb-5">
            <p>{pressRelease ? pressRelease[lang] : description[lang]}</p>
          </div>
          {contacts && (
            <div className="text-lg font-semibold  text-gray-800 mb-5">
              <h2 className="mb-3">
                {lang === 'en' ? 'Contacts:' : 'Контакти:'}
              </h2>
              <div className="text-sm font-semibold text-indigo-600">
                <p className="py-1">{contacts.name}</p>
                <p className="py-1">{contacts.phone}</p>
                <p className="py-1">{contacts.email}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
