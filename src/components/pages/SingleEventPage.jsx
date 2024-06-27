import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEventById } from '../../redux/events/operations_';
import { getEvents } from '../../redux/selectors';

export const SingleEventPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEventById(id));
  }, [dispatch, id]);

  const { currentEvent_ } = useSelector(getEvents);
  console.log(currentEvent_);

  return currentEvent_ ? (
    <>
      <h1>
        I am SingleEventPage of{' '}
        <span className="text-red-600 font-bold">{currentEvent_.title.en}</span>
      </h1>
      <p className="text-red-600 font-bold">
        Vadym, update me using 'currentEvent' redux state and this{' '}
        <a
          target="blank_"
          href="https://www.eventbrite.ca/e/salsa-bachata-international-artist-weekender-sep-14-15-2024-tickets-892119351997?aff=erelexpmlt"
          className="underline underline-offset-2"
        >
          template
        </a>
      </p>
    </>
  ) : null;
};
