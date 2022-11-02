import React from "react";
import logoNeon from '../img/logoNeon.png'
// import Login from "./login.jsx";
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div className="home_container">
            <img src={logoNeon} alt='logo' />
            <p>
                <Link to={'Login'} id='btnLogin'>INGRESAR</Link>
            </p>
        </div>
    )
}

export default Home