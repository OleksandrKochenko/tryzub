import { NavLink } from 'react-router-dom';
import { MainMenu } from './MainMenu';
import { Social } from './Social';
import logo from '../../img/logo_scratch.jpg';
import { Langs } from './Langs';
import { useSelector } from 'react-redux';
import { getLang } from '../../redux/selectors';
import { Icon } from '@iconify/react';

export const Header = () => {
  const lang = useSelector(getLang);

  return (
    <div className="h-[15vh] bg-[#EBEDEC] flex justify-evenly items-center">
      <NavLink to={'/'}>
        <img src={logo} alt="UCA Tryzub" width={280} />
      </NavLink>
      <MainMenu />
      <button className="p-2 border-2 h-fit bg-red-400 flex justify-center items-center" type="button">
      <Icon icon="openmoji:light-blue-heart" className="mr-1 text-[22px]"/>
        {lang === 'eng' ? 'Donate' : 'Підтримати'}
      </button>
      <Social styles="header" />
      <Langs />
    </div>
  );
};
