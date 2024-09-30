import React from 'react';
import { Link } from 'react-router-dom'; 
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import './Navbar.css'; 


const Navbar = () => {
  return (
    <header className="header header-light">
      <div className="container">
        <nav className="navigation navigation-landscape">
          <div className="nav-header">
            <Link className="nav-brand" to="/">
              <img
                src="https://www.roongtagroup.co.in/uploads/192x55.png"
                className="logo"
                alt="Lalit Roongta Group"
              />
            </Link>
            <div className="nav-toggle"></div>
          </div>
          <div className="nav-menus-wrapper" style={{ transitionProperty: 'none' }}>
            <ul className="nav-menu">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="#">Residential<span className="submenu-indicator"></span> </Link>
                <MdOutlineKeyboardArrowDown />
               
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <Link to="">All Projects</Link>
                  </li>
                  <li>
                    <Link to="">Ready Possession</Link>
                  </li>
                  <li>
                    <Link to="">Ongoing Projects</Link>
                  </li>
                  <li>
                    <Link to="">Upcoming Projects</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">Commercial<span className="submenu-indicator"> <MdOutlineKeyboardArrowDown /></span></Link>
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <Link to="">All Projects</Link>
                  </li>
                  <li>
                    <Link to="">Ready Possession</Link>
                  </li>
                  <li>
                    <Link to="">Ongoing Projects</Link>
                  </li>
                  <li>
                    <Link to="">Upcoming Projects</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">NA Plots<span className="submenu-indicator"> <MdOutlineKeyboardArrowDown /></span></Link>
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <Link to="">All Projects</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/properties-list?offers=1">Offers</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
            <ul className="nav-menu nav-menu-social ">
              <li>
                <Link to="/Signin">
                  <i className="Sign"><IoMdContact /></i>Sign In
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
