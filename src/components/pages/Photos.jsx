import { EventsList } from 'components/elements/EventsList';
import { Gallery } from 'components/elements/Gallery';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/events/operations_';
import { getEvents, getLang } from '../../redux/selectors';
import { screens } from '../../data/constants';
import { Icon } from '@iconify/react';
import { Drawer } from '@mui/material';

export const PhotosPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [openDrawer, setOpenDrawer] = useState(false);

  const { events_, currentEvent_ } = useSelector(getEvents);
  const lang = useSelector(getLang);
  const filtredEvents = events_?.length
    ? [...events_].filter(el => el.gallery?.length > 0)
    : null;
  const vw = window.innerWidth;

  const date = currentEvent_ && new Date(currentEvent_.startDate);

  return filtredEvents ? (
    <div className="flex flex-col md:flex-row w-full ">
      <section className="w-full md:w-[20%] p-2 md:p-4 ">
        <h2 className="hidden md:flex flex-col mb-4 italic">
          <span className="text-3xl uppercase w-full tracking-[6px]">
            A picture
          </span>
          <span>is worth a thousand words</span>
        </h2>
        {vw > screens.sm ? (
          <EventsList filtredEvents={filtredEvents} onClick={() => {}} />
        ) : (
          <div className="flex justify-between text-sm px-2 items-center">
            <div
              className="p-2 rounded border border-gray-700"
              onClick={() => setOpenDrawer(true)}
            >
              <Icon
                icon="wpf:stack-of-photos"
                className="text-blue-700 text-2xl"
              />
            </div>
            <p>{currentEvent_ && currentEvent_.title[lang]}</p>
            <p className="text-gray-600">{' | '}</p>
            <p className="text-orange-600 font-semibold">
              {date &&
                date.toLocaleDateString(`${lang}-${lang.toUpperCase()}`, {
                  timeZone: 'America/Winnipeg',
                })}
            </p>
          </div>
        )}
      </section>
      <Gallery filtredEvents={filtredEvents} />
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="left"
        PaperProps={{
          sx: {
            height: 'fit-content',
            bgcolor: '#60a5fa',
            opacity: 0.92,
          },
        }}
      >
        <div className="w-[70vw] p-[4vw]">
          <button
            type="button"
            onClick={() => setOpenDrawer(false)}
            className="bg-transparent  absolute top-[2vw] end-[2vw] flex items-center justify-center"
          >
            <Icon icon="gridicons:cross" className="text-3xl text-red-500" />
          </button>

          <EventsList
            filtredEvents={filtredEvents}
            onClick={() => setOpenDrawer(false)}
          />
        </div>
      </Drawer>
    </div>
  ) : (
    <p>Loading...</p>
  );
};
