import React from "react";
import { listUser } from "../petitions/userPetition.js";
import { UserItem } from './infoUser.jsx'

// const arrayUser = [
//     {
//         accessToken: "tokenprueba",
//         user: { email: 'prueba1@systers.xyz', role: 'admin', id: 1 }
//     },

//     {
//         accessToken: "tokenprueba2",
//         user: { email: 'prueba2@systers.xyz', role: 'admin2', id: 2 }
//     }
// ];



const getListUser = listUser()
const AdminUser = () => {
    const arrayUser = getListUser
    console.log('get', arrayUser)
    return (
        <div className="">
            <h2>Administrar Usuarios</h2>
            <div>
                {arrayUser.map(data => (<UserItem key={data.user.id} email={data.user.email} role={data.user.role} />))}
            </div>
        </div>
    )
}

export default AdminUser
