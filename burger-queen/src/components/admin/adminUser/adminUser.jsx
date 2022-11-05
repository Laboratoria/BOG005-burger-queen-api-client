import React, { useState, useEffect } from "react";
import { listUser } from "../../../petitions/userPetition.js";
import { Modal } from "../../modal/modal.jsx";
import { UserItem } from './infoUser.jsx'
import { CreateUser } from "./createUser.jsx";
// import { EditUserComponent } from "./editUser.jsx";
import { BurgerContext } from "../../../context/indexContext.jsx";




const AdminUser = () => {
    const { openModal,
        setOpenModal,
        users,
        setUsers,
      } = React.useContext(BurgerContext);

    // const [users, setUsers] = useState([])
    // const [openModal, setOpenModal] = useState(false)

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

    useEffect(() => { getListUser() } , [])

    const onClickBtn = () => {
        console.log('boton agregar usuarios');
        setOpenModal(true)
    }



    return (
        <div >
            <h2>Administrar Usuarios</h2>
            <div className="tableUser_container">
                {users.map(data => (<UserItem key={data.id} id={data.id} email={data.email} role={data.role} />))}
            </div>
            <div>
                {!!openModal && (
                    <Modal>
                        <CreateUser/>
                    </Modal>
                )}

                <button onClick={onClickBtn} setOpenModal={setOpenModal}>Agregar Usuario</button>

            </div>
        </div>
    )
}

export { AdminUser }
