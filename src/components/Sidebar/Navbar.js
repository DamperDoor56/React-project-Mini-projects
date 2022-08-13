import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import './navbar.css'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <div className='navbar'>
        <Link to="#" className='menu-bars'>
          <AiOutlineMenu/>
        </Link>
    </div>
    <nav onClick={showSidebar} className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items'>
        <li className='navbar-toggle'>
          <Link to='#' className='menu-bars'>
            <AiOutlineClose />
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
    </nav>
    </>
  )
}

export default Navbar;