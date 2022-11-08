import React, { useState, useEffect } from "react";
import { listUser } from "../petitions/userPetition.js";
import { UserItem } from './infoUser.jsx'
import { CreateUser } from "./createUser.jsx";



const AdminUser = () => {
    const [users, setUsers] = useState([])

    const getListUser = () => {
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
    useEffect(() => { getListUser() }, [])

    return (
        <div>
            <h2>Administrar Usuarios</h2>
            <div>
                {/* {getListUser.map(data => (<UserItem key={data.id} email={data.email} role={data.role} />))} */}
                {/* {getListUser()} */}
                {users.map(data => (<UserItem key={data.id} email={data.email} role={data.role} />))}
                {/* <CreateUser /> */}
            </div>
            <div>
                <button >Crear Usuario</button>
            </div>
        </div>
    )
}

export { AdminUser }
