import React, { useContext, useState } from 'react'
import { SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SSearch, SSearchIcon, SSidebar, STheme, SDivider, SThemeLabel, SThemeToggler, SToggleThumb, SSidebarButton } from './styles';
import { logoSVG } from '../../assets';
import { AiOutlineSearch, AiOutlineHome, AiOutlineCalculator, AiOutlineLeft, AiOutlineSetting} from "react-icons/ai";
import { FaResearchgate } from "react-icons/fa";
import { BsListCheck } from "react-icons/bs";
import { GiRomanToga } from "react-icons/gi";
import { ThemeContext } from './../../App';

const Sidebar = () => {
  const {setTheme, theme} = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
  <SSidebar isOpen={sidebarOpen}>
    <>
    <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p => !p))}>
      <AiOutlineLeft />
    </SSidebarButton>
    </>
    <SLogo>
      <img src={logoSVG} alt="logo"/>
    </SLogo>
    <SSearch style={!sidebarOpen ? {width: `fit-content`} : {}}>
      <SSearchIcon>
        <AiOutlineSearch />
      </SSearchIcon>
      <input placeholder="Search" style={!sidebarOpen ? {width: 0, padding: 0} : {}} />
    </SSearch>
    <SDivider />
    {linksArray.map(({icon, label, notification, to}) => (
    <SLinkContainer key={label}>
      <SLink to={to} style={!sidebarOpen ? {width: `fit-content`} : {}} >
        <SLinkIcon>{icon}</SLinkIcon>
        {sidebarOpen && (
          <>
          <SLinkLabel>{label}</SLinkLabel>
        {/* if notifications are 0 or null, display: none */}
        {!!notification && <SLinkNotification>{notification}</SLinkNotification>}
        </>
        )} 
        
        
      </SLink>
    </SLinkContainer>
    ))}
    <SDivider />
    {secondaryLinksArray.map(({icon, label}) => 
    (
      <SLinkContainer>
        <SLink to="/" style={sidebarOpen ? {width: `fit-content`} : {}}>
          <SLinkIcon>{icon}</SLinkIcon>
          {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
        </SLink>
      </SLinkContainer>
    ))}
    <SDivider />
    <STheme>
      {sidebarOpen &&<SThemeLabel>Dark Mode</SThemeLabel>}
      <SThemeToggler 
      isActive={theme === 'dark'}
      onClick={() => setTheme((p) => (p === 'light' ? 'dark' : 'light'))}
      >
        <SToggleThumb style={theme === 'dark' ? {right: '1px'} : { }} />
      </SThemeToggler>
    </STheme>
  </SSidebar>
  );
};
const linksArray =[
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
    notification: 0,
  },
  {
    label: "Calculator",
    icon: <AiOutlineCalculator />,
    to: "/Calculator",
    notification: 0,
  },
  {
    label: "Caesar Cipher",
    icon: <FaResearchgate />,
    to: "/CaesarCipher",
    notification: 0,
  },
  {
    label: "Roman Number Converter",
    icon: <GiRomanToga />,
    to: "/RomanNumber",
    notification: 0,
  },
  {
    label: "To do List",
    icon: <BsListCheck />,
    to: "/ToDoList",
    notification: 0,
  },
]

const secondaryLinksArray =[
  {
    label: "Settings",
    icon: <AiOutlineSetting />
  },
]
export default Sidebar;