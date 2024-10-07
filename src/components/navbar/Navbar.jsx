import React from "react";
import "./Navbar.css";
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'



export const Navbar = () => {
  return <>
    <nav className=" flex-div">
        <div className="nav-left flex-div">
            <img src={menu_icon} className="menu-icon" alt=""  />
            <img src={logo} className="logo" alt=""  />
        </div>

        <div className="nav-middle flex-div">
            <input type="text" placeholder="Search "/>
            <img src={search_icon} alt="" />
        </div>

        <div className="nav-right flex-div">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>

    </nav>
  
  </>;
};
