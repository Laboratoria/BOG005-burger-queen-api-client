import React from "react";

function LoginView(props) {
    return (
        <section className="loginComponent">

            <section className="sectionImg">
                <img src="/burgerQueenThin.png" className="logoBurger" alt="Burger logo" />
            </section>
            <section className="boxForm">
                <form className='loginForm'>
                    <h2 className="titleLogin">
                        Inicia Sesión
                    </h2>
                    <input
                        className="emailInput"
                        type='text'
                        placeholder="Introduce Email"
                        name="texto"
                    />
                    <input
                        className="passwordInput"
                        type='text'
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