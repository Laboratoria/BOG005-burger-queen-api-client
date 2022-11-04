import React, { useState } from "react";
import { createDataUser } from "../../../petitions/userPetition";
import { BurgerContext } from "../../../context/indexContext";

const CreateUser = () => {
    const { openModal,
        setOpenModal,
      } = React.useContext(BurgerContext);

    const [dataNewUser, setDataNewUser] = useState({
        email: '',
        password: '',
        role: ''
    })

    const handleChange = (e) => {
        setDataNewUser({
            ...dataNewUser,
            [e.target.name]: e.target.value
        });
        return dataNewUser
    }

    const onCancel = ()=>{
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault()
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
            setOpenModal(false);

    }

    return (
        <div className="createUser">
            <form onSubmit={onSubmit}>
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
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir Usuario
                </button>


                {/* <button onClick={createNewUser}>Crear Usuario</button> */}
            </form>
        </div>
    )
}

export { CreateUser }