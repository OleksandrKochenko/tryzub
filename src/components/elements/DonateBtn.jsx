import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { getLang } from '../../redux/selectors';
import { donateBtnData } from 'data/elementsData';

export const DonateBtn = () => {
  const lang = useSelector(getLang);
  const navigate = useNavigate();

  return (
    <button
      className="p-2 h-fit bg-red-400 flex justify-center items-center hover:scale-110 transition-transform duration-300"
      type="button"
      onClick={() => {
        navigate('/');
        setTimeout(() => {
          const anchor = document.querySelector('#donations');
          anchor.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }}
    >
      <Icon
        icon="openmoji:light-blue-heart"
        className="md:mr-1 text-4xl md:text-[22px]"
      />
      <span className="hidden md:inline">{donateBtnData[lang]}</span>
    </button>
  );
};
