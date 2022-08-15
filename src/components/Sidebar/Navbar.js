import React,{ useState} from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import './navbar.css';
import { IconContext } from 'react-icons'
import ReactSwitch from 'react-switch';



function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    
    <IconContext.Provider value={{color: 'snow'}}>
    <div className='navbar' id={theme}>
        <Link to="#" className='menu-bars'>
          <AiOutlineMenu onClick={showSidebar}/>
        </Link>
    </div>
    <nav id={theme} className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul id={theme}  className='nav-menu-items' onClick={showSidebar}>
        <li  id={theme} className='navbar-toggle'>
          <Link to='#' className='menu-bars'>
            <AiOutlineClose onClick={showSidebar} />
          </Link>
        </li>
        {SidebarData.map((item, index) => {
          return(
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className='switch'>
        <ReactSwitch onChange={toggleTheme} checked={theme === 'light'}/>
        </div>
    </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;