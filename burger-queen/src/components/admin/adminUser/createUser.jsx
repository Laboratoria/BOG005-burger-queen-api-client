import React, { useState } from "react";
import { createDataUser } from "../../../petitions/userPetition";
import { BurgerContext } from "../../../context/indexContext";

const CreateUser = () => {
    const { openModal,
        setOpenModal,
        editUserState,
        setEditUserState,
        dataNewUser,
        setDataNewUser,
    } = React.useContext(BurgerContext);


    const handleChange = (e) => {
        setDataNewUser({
            ...dataNewUser,
            [e.target.name]: e.target.value
        });
        return dataNewUser
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log("QUE DEVUELVE", createDataUser(dataNewUser))
        if (!!editUserState) {
            setOpenModal(false);
        } else {
            createDataUser(dataNewUser)
                // .then(res => {
                //     console.log("traerme algo", res)
                // })
                // .catch(
                //     {
                //         "error": "string"
                //     }
                // )
            setOpenModal(false);
            event.target.reset();
        }


    }

    return (
        <div className="createUser">
            <form onSubmit={onSubmit} className='createUserForm'>
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
                    value={dataNewUser.role}
                />
                <div>
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
                    Guardar
                </button>
                </div>


                {/* <button onClick={createNewUser}>Crear Usuario</button> */}
            </form>
        </div>
    )
}

export { CreateUser }