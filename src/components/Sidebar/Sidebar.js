import React from 'react'
import { SLogo, SSearch, SSidebar } from './styles';
import { logoSVG } from '../../assets';

const Sidebar = () => {
  return (
  <SSidebar>
    <SLogo>
      <img src={logoSVG} alt="logo"/>
    </SLogo>
    <SSearch>

    </SSearch>
  </SSidebar>
  );
};

export default Sidebar;