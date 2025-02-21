import { NavLink } from 'react-router-dom';
import { MainMenu } from './MainMenu';
import { Social } from './Social';
import logo from '../../img/logo_test.jpg';
import { Langs } from './Langs';
import { screens } from '../../data/constants';
import { DonateBtn } from './DonateBtn';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Drawer } from '@mui/material';

export const Header = () => {
  const vw = window.innerWidth;
  const [openDrawer, setOpenDrawer] = useState(false);

  return vw > screens.sm ? (
    <div className=" bg-[#ffffff] flex justify-evenly items-center ">
      <NavLink to={'/'}>
        <img src={logo} alt="UCA Tryzub" width={260} />
      </NavLink>
      <MainMenu />
      <DonateBtn />
      <Social styles="header" />
      <Langs />
    </div>
  ) : (
    <div className="bg-[#EBEDEC] w-full h-full flex items-center justify-evenly">
      <DonateBtn />
      <NavLink to={'/'}>
        <img src={logo} alt="UCA Tryzub" className="h-[10vh] md:h-[15vh]" />
      </NavLink>
      <button type="button" onClick={() => setOpenDrawer(true)}>
        <Icon
          icon="material-symbols:menu"
          className="text-5xl text-red-500 bg-blue-300 p-1 inline-block"
        />
      </button>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
        PaperProps={{
          sx: {
            height: 'fit-content',
            bgcolor: '#60a5fa',
            opacity: 0.92,
          },
        }}
      >
        <div className="w-[65vw] p-[2vw]">
          <button
            type="button"
            onClick={() => setOpenDrawer(false)}
            className="bg-transparent  absolute top-[4vw] end-[4vw] flex items-center justify-center"
          >
            <Icon icon="gridicons:cross" className="text-5xl text-red-500" />
          </button>

          <MainMenu onClick={() => setOpenDrawer(false)} />
          <div className=" flex items-center justify-between">
            <Langs />
            <Social styles="header" />
          </div>
        </div>
      </Drawer>
    </div>
  );
};
