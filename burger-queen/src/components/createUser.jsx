import React, { useState } from "react";
import { createDataUser } from "../petitions/userPetition";

const CreateUser = () => {

    const [dataNewUser, setDataNewUser] = useState({ 
        email: '',
        password: '',
        role: '' })

    const handleChange = (e) => {
        setDataNewUser({
            ...dataNewUser,
            [e.target.name]: e.target.value
        });
        return dataNewUser
    }

    const createNewUser =() => {
        console.log("QUE DEVUELVE", createDataUser(dataNewUser))
         createDataUser(dataNewUser)
         .then(res => {
            console.log("traerme algo", res)
            // setDataNewUser({
            //     email: '',
            //     password: '',
            //     role: '' 
            // })
        })
        .catch(
            {
                "error": "string"
             }
        )

     }

    return (
        <div>
            <form >
                <label htmlFor="email">Correo:</label>
                <input id="email" // input para el correo
                    type="email"
                    name="email"
                    placeholder="Usuario"
                    onChange={handleChange}
                    required
                    value={dataNewUser.email}
                />

                <label htmlFor="password">Contraseña:</label>
                <input id="password" // input para el password
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    required
                    value={dataNewUser.password}
                />

                <label htmlFor="role">Rol:</label>
                <input id="role" // input para el password
                    type="role"
                    name="role"
                    placeholder="Rol"
                    onChange={handleChange}
                    required
                    value={dataNewUser.rol}
                />

            </form>
            <button onClick={createNewUser}>Crear Usuario</button>
        </div>
    )
}

export { CreateUser }