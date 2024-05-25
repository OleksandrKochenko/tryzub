import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLang } from '../../redux/selectors';

export const MainMenu = () => {
  const lang = useSelector(getLang);
  return (
    <ul className="flex items-center">
      <li className="mx-6">
        <NavLink
          to={'/'}
          className={navData =>
            navData.isActive ? 'border-b border-red-400' : ''
          }
        >
          {lang === 'eng' ? 'Home' : 'Головна'}
        </NavLink>
      </li>
      <li className="mx-6">
        <NavLink
          to={'/contacts'}
          className={navData =>
            navData.isActive ? 'border-b border-red-400' : ''
          }
        >
          {lang === 'eng' ? 'Contacts' : 'Контакти'}
        </NavLink>
      </li>
      <li className="mx-6">
        <NavLink
          to={'/events'}
          className={navData =>
            navData.isActive ? 'border-b border-red-400' : ''
          }
        >
          {lang === 'eng' ? 'Events' : 'Події'}
        </NavLink>
      </li>
      <li className="mx-6">
        <NavLink
          to={'/photos'}
          className={navData =>
            navData.isActive ? 'border-b border-red-400' : ''
          }
        >
          {lang === 'eng' ? 'Gallery' : 'Галерея'}
        </NavLink>
      </li>
    </ul>
  );
};
