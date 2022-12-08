import React from "react";
import "./Navbar.css";
import Logo from "../../assest/full-stack-developer.gif";
import data from "./data";
import {IoIosColorPalette} from 'react-icons/io'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav_container">
        <a href="index.html"  className='nav_logo'>
          
          <img src={Logo} alt="logo"  />
  
        </a>
       
        <ul className="nav_menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        {/* <button id="theme_icon"><IoIosColorPalette/></button> */}
      </div>
    </nav>
  );
};

export default Navbar;
