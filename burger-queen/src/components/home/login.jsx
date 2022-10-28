import React from "react";
import FormLogin from "../formLogin";
import logoFondoPizarra from './images/logoSinFondo.png'



const Login = () => {
    return (
        <div className="login_container">
            <header>
                <img src={logoFondoPizarra} alt="logo" />
            </header>
            <FormLogin/>
        </div>
    )
}

export default Login