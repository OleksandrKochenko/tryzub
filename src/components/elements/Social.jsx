import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { socialData } from '../../data/elementsData';

export const Social = ({ styles }) => {
  return (
    <div className="flex items-center">
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
              className={`${style[styles]} ${hoverColor} transition-colors duration-300`}
            />
          </NavLink>
        );
      })}
    </div>
  );
};
