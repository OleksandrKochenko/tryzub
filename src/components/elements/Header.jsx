import { NavLink, useNavigate } from 'react-router-dom';
import { MainMenu } from './MainMenu';
import { Social } from './Social';
import logo from '../../img/logo_test.jpg';
import { Langs } from './Langs';
import { useSelector } from 'react-redux';
import { getLang } from '../../redux/selectors';
import { Icon } from '@iconify/react';

export const Header = () => {
  const lang = useSelector(getLang);
  const navigate = useNavigate();

  return (
    <div className="h-[15vh] bg-[#EBEDEC] flex justify-evenly items-center">
      <NavLink to={'/'}>
        <img src={logo} alt="UCA Tryzub" width={260} />
      </NavLink>
      <MainMenu />
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
        <Icon icon="openmoji:light-blue-heart" className="mr-1 text-[22px]" />
        {lang === 'en' ? 'Donate' : 'Підтримати'}
      </button>
      <Social styles="header" />
      <Langs />
    </div>
  );
};
