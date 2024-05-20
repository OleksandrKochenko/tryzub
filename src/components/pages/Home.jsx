import { CarouselElement } from 'components/elements/Carousel';

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <CarouselElement />
      {
        /* Here should be important text for search engines*/
        <h1>Tryzub Main Page</h1>
      }
    </div>
  );
};
