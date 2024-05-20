import { NavLink } from 'react-router-dom';
import { MainMenu } from './MainMenu';
import { Social } from './Social';
import logo from '../../img/logo_scratch.jpg';
import { Langs } from './Langs';

export const Header = () => {
  return (
    <div className="bg-[#EBEDEC] flex justify-evenly items-center h-[15vh]">
      <NavLink to={'/'}>
        <img src={logo} alt="UCA Tryzub" className="h-full max-h-[15vh] w-auto" />
      </NavLink>
      <MainMenu />
      <button className="p-2 border-2 h-fit bg-red-400" type="button">
        Donate
      </button>
      <Social />
      <Langs />
    </div>
  );
};
