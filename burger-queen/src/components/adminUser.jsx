import React, { useState, useEffect } from "react";
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


// const arrayUser = getListUser
const AdminUser = () => {
    const [users, setUsers] = useState([])
    // let arrayUser = []
    // let getListUser = []
    // listUser().then(res => { 
    //         getListUser = res.data
    //         console.log('get', getListUser)
    //     })

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
    useEffect(() => {getListUser()}, [])

    return (
        <div>
            <h2>Administrar Usuarios</h2>
            <div>
                {/* {getListUser.map(data => (<UserItem key={data.id} email={data.email} role={data.role} />))} */}
                {/* {getListUser()} */}
                {users.map(data => (<UserItem key={data.id} email={data.email} role={data.role} />))}
            </div>
        </div>
    )
}

export { AdminUser }
