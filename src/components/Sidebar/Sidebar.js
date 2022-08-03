import React, { useContext } from 'react'
import { SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SSearch, SSearchIcon, SSidebar, STheme, SDivider, SThemeLabel, SThemeToggler, SToggleThumb } from './styles';
import { logoSVG } from '../../assets';
import { AiOutlineSearch, AiOutlineHome, AiOutlineCalculator, AiOutlineSetting} from "react-icons/ai";
import { FaResearchgate } from "react-icons/fa";
import { BsListCheck } from "react-icons/bs";
import { GiRomanToga } from "react-icons/gi";
import { ThemeContext } from './../../App';

const Sidebar = () => {
  const {setTheme, theme} = useContext(ThemeContext)
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
    {linksArray.map(({icon, label, notification, to}) => (
    <SLinkContainer key={label}>
      <SLink to={to} >
        <SLinkIcon>{icon}</SLinkIcon>
        <SLinkLabel>{label}</SLinkLabel>
        {/* if notifications are 0 or null, display: none */}
        {!!notification && <SLinkNotification>{notification}</SLinkNotification>}
      </SLink>
    </SLinkContainer>
    ))}
    <SDivider />
    {secondaryLinksArray.map(({icon, label}) => 
    (
      <SLinkContainer>
        <SLink to="/">
          <SLinkIcon>{icon}</SLinkIcon>
          <SLinkLabel>{label}</SLinkLabel>
        </SLink>
      </SLinkContainer>
    ))}
    <SDivider />
    <STheme>
      <SThemeLabel>Dark Mode</SThemeLabel>
      <SThemeToggler isActive={theme === 'dark'}
      onClick={() => setTheme((p) => (p === 'light' ? 'dark' : 'light'))}>
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
    to: "/",
    notification: 0,
  },
  {
    label: "Caesar Cipher",
    icon: <FaResearchgate />,
    to: "/",
    notification: 0,
  },
  {
    label: "Roman Number Converter",
    icon: <GiRomanToga />,
    to: "/",
    notification: 0,
  },
  {
    label: "To do List",
    icon: <BsListCheck />,
    to: "/",
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