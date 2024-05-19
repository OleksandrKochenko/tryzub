import { CarouselElement } from 'components/elements/Carousel';

export const HomePage = () => {
  return (
    <div>
      <CarouselElement />
      {
        /* Here should be important text for search engines*/
        <h1>Tryzub Main Page</h1>
      }
    </div>
  );
};
