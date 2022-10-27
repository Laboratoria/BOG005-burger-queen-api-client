import React from "react";

const FormLogin = () => {
    return(
        <div >
            <form >
                <div >
                    <label  htmlFor="email">Correo:</label>
                    <input id="email" // input para el correo
                        type="email"
                        name="email"
                        placeholder="Usuario"
                        className="email"
                        onChange={handleChenge}
                        required
                    />
                </div>

                <div >
                    <label htmlFor="password">Contraseña:</label>
                    <input id="password" // input para el password
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        onChange={handleChenge}
                        required
                    />
                </div>
               
                <button  type="submit">
                    Iniciar Sesión
                </button>
            </form>

        </div>
    )
}

export default FormLogin;