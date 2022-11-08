
import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.scss";

const NavMenu = (props) => {
//   const navigate = useNavigate();
//   const logout = () => {
//     sessionStorage.clear();
//     navigate("/");
//   };
  return (
    <>
      <NavLink to={props.link1}>{props.item1}</NavLink>
      <NavLink to={props.link2}>{props.item2}</NavLink>
    </>
  );
};
export default NavMenu;