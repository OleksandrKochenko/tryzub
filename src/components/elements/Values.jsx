import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import { getLang } from '../../redux/selectors';
import { homePageData } from 'data/elementsData';

export const Values = () => {
  const lang = useSelector(getLang);

  return (
    <div className="flex justify-between w-4/5">
      {homePageData.values.map(el => (
        <div
          key={el.name}
          className="max-w-sm p-6 bg-zinc-200 border border-zinc-400 rounded-lg shadow-md "
        >
          <div className="flex ">
            <Icon icon={el.icon} className="text-3xl mr-5 text-blue-700" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
              {el.title[lang]}
            </h5>
          </div>
          <p className="mb-3 font-normal text-zinc-600 text-lg">
            {el.description[lang]}
          </p>
        </div>
      ))}
    </div>
  );
};
