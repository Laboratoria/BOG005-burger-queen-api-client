import React from "react";
import logoNeon from './images/logoNeon.png'
import Login from "./login.jsx";



const Home = ()=>{
return (
    <div className="home_container">
        <img src={logoNeon} alt='logo' />
        <button onClick={Login}>INGRESAR</button>
    </div>
)
}

export default Home