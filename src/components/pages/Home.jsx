import { useSelector } from 'react-redux';
import { getLang } from '../../redux/selectors';
import { CarouselElement } from 'components/elements/Carousel';
import { homePageData } from 'data/elementsData';
import { Values } from 'components/elements/Values';
import { News } from 'components/elements/News';
import { Donations } from 'components/elements/Donations';

export const HomePage = () => {
  const lang = useSelector(getLang);

  return (
    <div className="flex flex-col items-center">
      <CarouselElement />
      {
        /* Here should be important text for search engines*/
        <h1 className="w-4/5 text-center text-3xl my-20 ">
          {homePageData.hero[lang]}
        </h1>
      }
      <Values />
      <News />
      <Donations />
    </div>
  );
};
