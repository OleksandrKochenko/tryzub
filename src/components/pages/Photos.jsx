import { EventsList } from 'components/elements/EventsList';
import { useState } from 'react';

export const PhotosPage = () => {
  const [event, setEvent] = useState(null);

  return (
    <div className="flex w-full">
      <section className="w-[20%]  p-4 ">
        <h2 className="flex flex-col mb-4 italic">
          <span className="text-3xl uppercase w-full tracking-[6px]">
            A picture
          </span>
          <span>is worth a thousand words</span>
        </h2>
        <EventsList event={event} setEvent={setEvent} />
      </section>
      <section className="bg-green-900 w-[80%]  p-4 flex justify-center items-center">
        {event && event.toUpperCase()} photos will be here
      </section>
    </div>
  );
};
