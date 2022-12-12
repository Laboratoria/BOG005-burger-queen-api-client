import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonInclusive from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/logohifive.png";
import "./styles/Header.css";

const Header = () => {

    const navigate = useNavigate();

    const emailUserStatus = localStorage.getItem("userEmail")
    const roleUserStatus = localStorage.getItem("userRole")

    const logOut = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <>
        <figure className="hifivelogo">
            <img src={logo} className="logohifive" alt="logo" />
        </figure>
        <div className="statusLogin">
            <h1 className="orders">TOMA DE ORDENES</h1>
        </div>
        <div className="statusNow">
            <p className="now">{emailUserStatus} | {roleUserStatus}</p>
        </div>
        <ButtonInclusive className="buttonLogout" type="button" onClick={logOut}>
        <FontAwesomeIcon className="iconSignOut" icon={faRightFromBracket} />
        </ButtonInclusive>
        </>
    )
}

export default Header