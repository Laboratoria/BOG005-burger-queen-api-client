import React from "react";
import { createDataUser } from "../../../petitions/userPetition";
import { BurgerContext } from "../../../context/indexContext";
import { listUser, editUser } from "../../../petitions/userPetition";

const CreateUser = () => {
    const {
        setUsers,
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
        setEditUserState(false)
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
            setEditUserState(false)
        }


    }

    return (
        <div className="createUser">
            <h2>Nuevo Usuario</h2>
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
                    <option value="admin">Admin</option>
                    <option value="waiter">Waiter</option>
                    <option value="chef">Chef</option>
                </select>
                <div className="btns">
                    <button
                        type="submit"
                        className="btn"
                    >
                        Guardar
                    </button>
                    <button
                        type="button"
                        className="btn"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    )
}

export { CreateUser }