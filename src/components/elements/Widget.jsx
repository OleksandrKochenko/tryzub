import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { fetchEventById } from '../../redux/events/operations_';

export const Widget = ({
  id,
  imgSrc,
  date,
  month,
  title,
  description,
  time,
  place,
  gallery,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="relative">
        <NavLink to={`/events/${id}`}>
          <img className="w-full" src={imgSrc} alt={title} />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </NavLink>
        {gallery?.length > 0 && (
          <span
            onClick={async () => {
              await dispatch(fetchEventById(id));
              navigate('/photos');
            }}
          >
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white cursor-pointer hover:text-indigo-600 transition duration-500 ease-in-out">
              Photos
            </div>
          </span>
        )}

        <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 ">
          <span className="font-bold">{date}</span>
          <small>{month}</small>
        </div>
      </div>
      <div className="px-6 py-4">
        <NavLink
          to={`/events/${id}`}
          className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
        >
          {title}
        </NavLink>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <div className="px-6 py-1 flex flex-row items-center">
        <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
          <Icon
            icon="mdi:calendar-clock"
            className="text-indigo-600 mr-2 text-lg"
          />
          <span className="ml-1 text-sm font-semibold text-indigo-600">
            {time}
          </span>
        </span>
      </div>
      <div className="px-6 py-1 mb-2 flex flex-row items-center">
        <Icon icon="mdi:map-marker" className="text-indigo-600 mr-2 text-xl" />
        <span className="ml-1 text-sm font-semibold text-indigo-600">
          {place}
        </span>
      </div>
    </div>
  );
};
