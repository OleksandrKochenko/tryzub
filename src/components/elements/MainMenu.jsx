import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLang } from '../../redux/selectors';
import { mainMenuData } from 'data/elementsData';

export const MainMenu = () => {
  const lang = useSelector(getLang);

  return (
    <ul className="flex items-center">
      {mainMenuData.map((el, idx) => {
        return (
          <li className="mx-6" key={idx}>
            <NavLink
              to={el.route}
              className={navData =>
                navData.isActive ? 'border-b border-red-400' : ''
              }
            >
              {el[lang]}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
