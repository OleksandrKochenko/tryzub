import { useSelector } from 'react-redux';
import { getLang } from '../../redux/selectors';
import { homePageData } from 'data/elementsData';

export const Donations = () => {
  const lang = useSelector(getLang);
  const { donation } = homePageData;

  return (
    <div className="w-4/5 my-10">
      <h5 className="font-semibold text-2xl text-gray-900">
        {donation.title[lang]}
      </h5>
      <p>{donation.disclaimer[lang]}</p>
      <p>{donation.description[lang]}</p>
      <p className="my-2 font-semibold">{donation.subtitle[lang]}</p>
      <ul>
        {donation.methods.map((el, idx) => (
          <li key={idx} className="my-2 ml-2">
            <h6 className="underline underline-offset-4">{el.name[lang]}</h6>
            <p>{el.method[lang]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
