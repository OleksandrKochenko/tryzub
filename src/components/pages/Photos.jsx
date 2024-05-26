import { EventsList } from 'components/elements/EventsList';
import { Gallery } from 'components/elements/Gallery';

export const PhotosPage = () => {
  return (
    <div className="flex w-full">
      <section className="w-[20%]  p-4 ">
        <h2 className="flex flex-col mb-4 italic">
          <span className="text-3xl uppercase w-full tracking-[6px]">
            A picture
          </span>
          <span>is worth a thousand words</span>
        </h2>
        <EventsList />
      </section>
      <Gallery />
    </div>
  );
};
