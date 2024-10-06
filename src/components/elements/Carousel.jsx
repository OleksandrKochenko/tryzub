import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchEvents } from '../../redux/events/operations_';
import { getEvents, getLang } from '../../redux/selectors';
import { formatTimeAndDate } from 'data/helpers';

export const CarouselElement = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents('emphasize'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { events_ } = useSelector(getEvents);
  const lang = useSelector(getLang);

  return (
    <div className="w-full md:w-[80%] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        transitionTime={1000}
        autoPlay={true}
        stopOnHover={false}
        interval={10000}
      >
        {events_ &&
          events_.map(
            ({ _id, coverImg, title, announce, address, startDate }) => {
              const time = formatTimeAndDate(startDate, null, lang);
              return (
                <div key={_id} className="relative">
                  <NavLink to={`/events/${_id}`} className="flex h-fit">
                    <img
                      src={coverImg}
                      alt={title[lang]}
                      className="h-[40vh] md:h-[85vh] object-cover"
                    />
                  </NavLink>
                  <div className="absolute bottom-10 w-full font-semibold backdrop-blur-sm [text-shadow:_1px_1px_2px_#000] flex flex-col items-center">
                    <h2 className="text-white text-[24px] md:text-[38px]">
                      {title[lang]}
                    </h2>
                    <p className="hidden md:block text-white text-[20px] w-[90%] ">
                      {announce[lang]}
                    </p>
                    <div className="w-full flex justify-center">
                      <div className="hidden md:flex items-center text-orange-400 md:text-[20px] mx-1">
                        <Icon icon="mdi:place-outline" />
                        <span className="mx-2">
                          {address[lang] || address.en}
                        </span>
                      </div>
                      <div className="flex items-center text-orange-400 text-[14px] md:text-[20px] ">
                        <Icon icon="ion:calendar-outline" />
                        <span className="mx-2">{time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
      </Carousel>
    </div>
  );
};
