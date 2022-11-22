import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { postUserPetition } from "../utils/petitions.js";

function LoginView() {

    const navigating = useNavigate();
    const [emailUser, setEmailUser] = useState('')
    const [passwordUser, setPasswordUser] = useState('')

    function handleChangeEmail(event) {
        setEmailUser(event.target.value)
    }

    function handleChangePassword(event) {
        setPasswordUser(event.target.value)
    }

    function authUser(event) {
        event.preventDefault()
        console.log(emailUser)
        console.log(passwordUser)

        postUserPetition(emailUser, passwordUser)
            .then((response) => {
                console.log(response)
                const errorMessage = document.getElementById('errorMessage')
                errorMessage.innerHTML = ''

                if (response.data.user.role === 'admin') {
                    console.log('Tienes acceso')
                    navigating('/admin-products');
                }
            })
            .catch((error) => {
                console.log(error)
                if (error.response.data === 'Incorrect password') {
                    console.log('*Contraseña incorrecta')
                    errorMessage.innerHTML = '*Contraseña incorrecta'
                }
                else {
                    console.log('*Usuario no encontrado')
                    errorMessage.innerHTML = '*Usuario no encontrado'
                }
            })
    }

    return (
        <section className="loginComponent">

            <section className="sectionImg">
                <img src="/bigFoodsLogo.png" className="logoMobile" alt="Burger logo" />
                <img src="/bigFoodsLogo.png" className="logoDesk" alt="Burger logo" />
            </section>
            <section className="boxForm">
                <form className='loginForm' onSubmit={authUser}>
                    <h2 className="titleLogin">
                        Inicia Sesión
                    </h2>
                    <input
                        className="emailInput"
                        type='email'
                        placeholder="Introduce Email"
                        name="email"
                        required
                        value={emailUser}
                        onChange={handleChangeEmail}
                    />
                    <input
                        className="passwordInput"
                        type='password'
                        placeholder="Introduce Contraseña"
                        name="password"
                        required
                        value={passwordUser}
                        onChange={handleChangePassword}
                    />
                    <p id="errorMessage"></p>
                    <button type="submit" className="loginBtn">
                        Ingresar
                    </button>
                </form>
            </section>
        </section>
    )
}

export { LoginView }