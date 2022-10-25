import React from "react";
import logoFondoPizarra from './images/logoSinFondo.png'


const Login = () => {
    return (
        <div className="login_container">
            <header>
                <img src={logoFondoPizarra} alt="logo" />
            </header>
            <div className="form_container">
                <form >
                    <label>Correo:</label>
                    <input type='email'></input>
                    <label>Contraseña:</label>
                    <input type='password'></input>
                </form>
                <button>INICIAR SESIÓN</button>
            </div>
        </div>
    )
}

export default Login