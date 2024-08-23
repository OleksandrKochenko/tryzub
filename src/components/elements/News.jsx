import { useSelector } from 'react-redux';
import { getLang } from '../../redux/selectors';
import { homePageData } from 'data/elementsData';

export const News = () => {
  const lang = useSelector(getLang);

  return (
    <div className="w-4/5 ">
      <h5 className="font-semibold text-2xl text-gray-900">
        {homePageData.news[lang]}
      </h5>
      <div>Section under construction</div>
    </div>
  );
};
