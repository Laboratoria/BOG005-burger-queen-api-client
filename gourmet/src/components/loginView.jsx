import React from "react";

function LoginView(props) {
    return (
        <section className="loginComponent">

            <section className="sectionImg">
                <img src="/burgerQueenThin.png" className="logoMobile" alt="Burger logo" />
                <img src="/burgerQueenBig.png" className="logoDesk" alt="Burger logo" />
            </section>
            <section className="boxForm">
                <form className='loginForm'>
                    <h2 className="titleLogin">
                        Inicia Sesión
                    </h2>
                    <input
                        className="emailInput"
                        type='email'
                        placeholder="Introduce Email"
                        name="texto"
                    />
                    <input
                        className="passwordInput"
                        type='password'
                        placeholder="Introduce Contraseña"
                        name="texto"
                    />
                    <button className="loginBtn">
                        Ingresar
                    </button>
                </form>
            </section>
        </section>
    )
}

export { LoginView }