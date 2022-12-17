import React from "react";
import "./Navbar.css";
import Logo from "../../assest/full-stack-developer.gif";
import data from "./data";
import { ImDownload } from "react-icons/im";
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
        <a href="https://drive.google.com/file/d/1Ft3zyA6KHRmaUC3C9FAr6p_9tWgwrQJi/view?usp=share_link" target="_blank" download className="btn primary">
            Download Resume
            <ImDownload />
          </a>
      </div>
    </nav>
  );
};

export default Navbar;
