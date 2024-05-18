import { NavLink } from 'react-router-dom';

export const MainMenu = () => {
  return (
    <ul className="flex items-center">
      <li className="mx-6">
        <NavLink
          to={'/'}
          className={navData =>
            navData.isActive ? 'border-b border-red-400' : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mx-6">
        <NavLink
          to={'/contacts'}
          className={navData =>
            navData.isActive ? 'border-b border-red-400' : ''
          }
        >
          Contacts
        </NavLink>
      </li>
      <li className="mx-6">
        <NavLink
          to={'/events'}
          className={navData =>
            navData.isActive ? 'border-b border-red-400' : ''
          }
        >
          Events
        </NavLink>
      </li>
      <li className="mx-6">
        <NavLink
          to={'/photos'}
          className={navData =>
            navData.isActive ? 'border-b border-red-400' : ''
          }
        >
          Gallery
        </NavLink>
      </li>
    </ul>
  );
};
