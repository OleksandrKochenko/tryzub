import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { socialData } from '../../data/elementsData';

export const Social = ({styles}) => {
  return (
    <div className="flex items-center">
      {socialData.map(({icon, style, link}, idx)=>{return( 
      <NavLink key = {idx} to={link} target='_blank'>
        <Icon
          icon={icon}
          className={style[styles]}
        />
      </NavLink>)})}
    </div>
  );
};
