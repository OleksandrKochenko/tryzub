import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLang } from '../../redux/selectors';
import { mainMenuData } from 'data/elementsData';

export const MainMenu = ({ onClick }) => {
  const lang = useSelector(getLang);

  return (
    <ul className="flex text-white text-xl md:text-lg md:text-inherit items-start md:items-center flex-col md:flex-row">
      {mainMenuData.map((el, idx) => {
        return (
          <li className="mx-6 my-3" key={idx} onClick={onClick}>
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
