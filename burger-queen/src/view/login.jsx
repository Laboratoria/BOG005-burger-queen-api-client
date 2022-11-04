
import React from "react";
import logoFondoPizarra from '../img/logoSinFondo.png'
import FormLogin from "../components/login/formLogin.jsx";


const Login = () => {
 
    return (
        <div className="login_container">
            <header>
                <img src={logoFondoPizarra} alt="logo" />
            </header>
            <FormLogin />
        </div>
    )
}

export default Login