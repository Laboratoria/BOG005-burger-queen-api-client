import React from "react";
import { createDataUser } from "../../../petitions/userPetition";
import { BurgerContext } from "../../../context/indexContext";
import { listUser, editUser } from "../../../petitions/userPetition";

const CreateUser = () => {
    const {
        setUsers,
        setOpenModal,
        editUserState,
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
        if (editUserState === false) {
            createDataUser(dataNewUser)
                .then(res => {
                    listUser().then(res => {
                        setUsers(res.data.map((user) => {
                            return {
                                email: user.email,
                                id: user.id,
                                password: user.password,
                                role: user.role,
                            }
                        }))
                    })
                }
                )
                .catch(error => {
                    console.error(error)
                })
            setOpenModal(false);
        } else if (editUserState === true) {
            editUser(dataNewUser.id, dataNewUser)
                .then(res => {
                    listUser().then(res => {
                        setUsers(res.data.map((user) => {
                            return {
                                email: user.email,
                                id: user.id,
                                password: user.password,
                                role: user.role,
                            }
                        }))
                    })
                })
                .catch(error => {
                    console.error(error)
                })
            setOpenModal(false);
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
                <select d="role" // input para el password
                    type="role"
                    name="role"
                    placeholder="Rol"
                    onChange={handleChange}
                    required
                    value={dataNewUser.role}>
                    <option value="Admin">Admin</option>
                    <option value="Waiter">Waiter</option>
                    <option value="Chef">Chef</option>
                </select>
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
            </form>
        </div>
    )
}

export { CreateUser }