import React,{ useState} from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import './navbar.css';
import { IconContext } from 'react-icons'


function Navbar() {
  const [sidebar, setSidebar] = useState(false);


  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    
    <IconContext.Provider value={{color: 'snow'}}>
    <div className='navbar'>
        <Link to="#" className='menu-bars'>
          <AiOutlineMenu onClick={showSidebar}/>
        </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
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
        </div>
    </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;