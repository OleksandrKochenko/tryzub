import { useSelector } from 'react-redux';
import { getLang } from '../../redux/selectors';
import { homePageData } from 'data/elementsData';
import { Icon } from '@iconify/react';

export const Donations = () => {
  const lang = useSelector(getLang);
  const { donation } = homePageData;

  return (
    <div id="donations" className="w-4/5 ">
      <h5 className="font-semibold text-2xl text-gray-900">
        {donation.title[lang]}
      </h5>
      <p>{donation.disclaimer[lang]}</p>
      <p>{donation.description[lang]}</p>
      <p>{donation.subtitle[lang]}</p>
      <ul>
        {donation.methods.map((el, idx) => (
          <li key={idx} className="my-2 ml-2">
            <div className="flex justify-start items-center">
              <Icon icon={el.icon} className="text-blue-700 text-3xl" />
              <h6 className="font-semibold ml-2">{el.name[lang]}</h6>
            </div>
            <p>{el.method[lang]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
