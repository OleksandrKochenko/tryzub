import { NavLink } from 'react-router-dom';
import { MainMenu } from './MainMenu';
import { Social } from './Social';
import logo from '../../img/logo_scratch.jpg';
import { Langs } from './Langs';
import { useSelector } from 'react-redux';
import { getLang } from '../../redux/selectors';

export const Header = () => {
  const lang = useSelector(getLang);

  return (
    <div className="bg-[#EBEDEC] flex justify-evenly items-center">
      <NavLink to={'/'}>
        <img src={logo} alt="UCA Tryzub" width={280} />
      </NavLink>
      <MainMenu />
      <button className="p-2 border-2 h-fit bg-red-400" type="button">
        {lang === 'eng' ? 'Donate' : 'Підтримати'}
      </button>
      <Social styles="header" />
      <Langs />
    </div>
  );
};
