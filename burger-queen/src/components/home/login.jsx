/* eslint-disable react-hooks/rules-of-hooks */
import React , {useState} from "react";
import logoFondoPizarra from './images/logoSinFondo.png'
import loginUser from '../../petitions/userPetition'
// let data = { email: 'grace@systers.xyz', password: '123456' };

// eslint-disable-next-line react-hooks/rules-of-hooks
// const [user, setuser] = useState('h')

const Login = () => {
    const [dataEmail, setDataEmail] = useState('vacio')
    
    const inputEmail = (event)=>{
        setDataEmail(event.target.value)
    }
    const dataUSER = {
        "email": "grace.hopper@systers.xyz",
        "password": "123456"
    }
    return (
        <div className="login_container">
            <header>
                <img src={logoFondoPizarra} alt="logo" />
            </header>
            <div className="form_container">
                <form >
                    <label>Correo:</label>
                    <input type='email' onChange={inputEmail}></input>
                    <label>Contraseña:</label>
                    <input type='password'></input>
                </form>
                <button onClick={loginUser(dataUSER)}>INICIAR SESIÓN</button>
            </div>
        </div>
    )
}

export default Login