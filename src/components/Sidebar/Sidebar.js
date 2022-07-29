import React from 'react'
import { SLogo, SSearch, SSearchIcon, SSidebar } from './styles';
import { logoSVG } from '../../assets';
import { AiOutlineSearch } from "react-icons/ai"
import { SDivider } from '../Layout/styles';


const Sidebar = () => {
  return (
  <SSidebar>
    <SLogo>
      <img src={logoSVG} alt="logo"/>
    </SLogo>
    <SSearch>
      <SSearchIcon>
        <AiOutlineSearch />
      </SSearchIcon>
      <input placeholder="Search" />
    </SSearch>
    <SDivider />
    <SLinkContainer>
      <SLink>
        <SLinkIcon></SLinkIcon>
        <SLinkILabel></SLinkILabel>
        <SLinkNotification></SLinkNotification>
      </SLink>
    </SLinkContainer>
  </SSidebar>
  );
};

export default Sidebar;