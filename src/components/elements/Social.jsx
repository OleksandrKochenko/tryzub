import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { socialData } from '../../data/elementsData';

export const Social = ({ styles = "header"}) => {
  return (
    <div className={`flex items-center ${styles === "footer" ? 'space-x-5' : 'space-x-3'}`}>
      {socialData.map(({ icon, style, link, hoverColor }, idx) => {
        return (
          <NavLink
            key={idx}
            to={link}
            target={link ? '_blank' : ''}
            rel="noopener noreferrer"
          >
            <Icon
              icon={icon}
              className={`transition-colors duration-300 ${hoverColor} ${style[styles]}`}
            />
          </NavLink>
        );
      })}
    </div>
  );
};
