import React, { useState } from 'react';
import {  NavLink, Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './Sidebardata';
import { IconContext } from 'react-icons';
import logoimg from '../page1/images/brandlogo-min.png';
import './Adminnavbar.css';
import { Button } from 'react-bootstrap';

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AdminAuthentication/Auth";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);


  const showSidebar = () => setSidebar(!sidebar);

  const {  setUser } = useAuth();
  const navigate = useNavigate();
  
  const logoutfrom = useCallback(
    (e) => {
      e.preventDefault();
      setUser(null);
      navigate("/admin");
    },
    [setUser, navigate] 
  );



  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='adminnavbar'>
        <Button className='logoutadminbtn' onClick={ logoutfrom } >logout</Button>
          {/* <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> */}
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <span className='logonamedivadmin'>
                <NavLink to='/'>
                  <h5>
                    <img src={logoimg} alt="logo" />
                    <span className="logonameadmin">Educt.</span>
                  </h5>
                </NavLink>
              </span>
             
            </li>
           <br />
            {SidebarData.map((item, index) => {
              return (
               
              
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
