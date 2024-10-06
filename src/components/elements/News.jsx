import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import { getLang, getNews } from '../../redux/selectors';
import { fetchNews } from '../../redux/news/operatios';
import { homePageData } from 'data/elementsData';
import { NavLink } from 'react-router-dom';

export const News = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { news } = useSelector(getNews);
  const lang = useSelector(getLang);

  return (
    <div className="w-4/5 ">
      <h5 className="font-semibold text-2xl text-gray-900 pb-2">
        {homePageData.news[lang]}
      </h5>
      <div className="flex flex-col md:flex-row justify-between w-full ">
        {news.slice(-2).map(el => (
          <div
            key={el._id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-2 md:mb-0"
          >
            <div className="h-[55%] hidden md:block">
              <img
                className="rounded-t-lg h-full w-full object-cover"
                src={el.coverImg}
                alt={el.title[lang]}
              />
            </div>
            <div className="p-2 md:px-5 md:pb-5 md:pt-2 md:h-[45%]">
              <p className="text-xs text-gray-600 font-normal">
                {new Date(el.startDate).toLocaleDateString(
                  `${lang}-${lang.toUpperCase()}`
                )}
              </p>

              <h5 className="mb-1 md:mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 ">
                {el.title[lang]}
              </h5>
              <p className="mb-3 font-normal text-gray-700  max-h-24 line-clamp-3 md:line-clamp-4">
                {el.pressRelease[lang]}
              </p>
              <NavLink
                to={`/events/${el._id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <Icon className="ml-2" icon="maki:arrow" />
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
