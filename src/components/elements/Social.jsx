import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const Social = () => {
  return (
    <div className="flex items-center">
      <NavLink>
        <Icon
          icon="line-md:facebook"
          className="text-[4vh] text-gray-500 mx-1"
        />
      </NavLink>
      <NavLink>
        <Icon
          icon="line-md:instagram"
          className="text-[4vh] text-gray-500 mx-1"
        />
      </NavLink>
      <NavLink>
        <Icon
          icon="line-md:youtube"
          className="text-[5vh] text-gray-500 mx-1"
        />
      </NavLink>
      <NavLink>
        <Icon
          icon="line-md:twitter-x"
          className="text-[3.5vh] text-gray-500 mx-1"
        />
      </NavLink>
      <NavLink>
        <Icon
          icon="line-md:telegram"
          className="text-[4vh] text-gray-500 mx-1"
        />
      </NavLink>
    </div>
  );
};
