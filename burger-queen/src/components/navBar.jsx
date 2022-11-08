import React from "react";
import { useState } from "react";
import logoFondoPizarra from '../img/logoSinFondo.png'
import NavMenu from "./navMenu";
import "./navBar.scss";


const Navbar = ({item1, item2, link1, link2}) => {
  const [menu, setMenu] = useState(false);
 

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
       <nav className="NavbarItems">
            <img src={logoFondoPizarra} alt="logo" />
            <i className="fa-solid fa-bars menu-mobile" onClick={handleMenu} ></i>
        {menu ? (
          <>
           <div className="menu-content-mobile"><NavMenu item1={item1} item2={item2} link1={link1} link2={link2}/></div> 
          </>
        ) : null}
        <div className="menu-content"><NavMenu item1={item1} item2={item2} link1={link1} link2={link2}/> </div>
      </nav>

  );
};

export default Navbar;