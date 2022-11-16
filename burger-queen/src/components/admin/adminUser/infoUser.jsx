import React from "react";
import { deleteUser } from "../../../petitions/userPetition";
import { BurgerContext } from "../../../context/indexContext";
import Swal from 'sweetalert2'


const UserItem = (props) => {
    const {
        users,
        setUsers,
        // openModal,
        setOpenModal,
        // editUserState,
        setEditUserState,
        dataNewUser,
        setDataNewUser,
    } = React.useContext(BurgerContext);

    const deleteUserBtn = () => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "No podrás recuperar el usuario!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText:  'Sí, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(props.id, props)
                 // filtra el estado para volverlo a renderizar
        const arrayFilterUser = users.filter(user => user.id !== props.id )
        setUsers(arrayFilterUser)
              Swal.fire(
                'Eliminado!',
                            'El Usuario ha sido eliminada correctamente',
                            'Eliminada correctamente',
              )
            }
          })

    }

    const saveUserEdit = (e) => {
        console.log('estado1',users);
        setEditUserState(true)
        setOpenModal(true)
        setDataNewUser({
            ...dataNewUser,
            email: props.email,
            password: props.password,
            role: props.role,
            id: props.id
        });
        e.target.reset();
        return dataNewUser
    }



    return (
        <div className="userItem_Container">
            <p className="email">{props.email}</p>
            <p className="role">{props.role}</p>
            <div className="buttonUsers">
            <button className="fa-solid fa-pen-to-square" onClick={saveUserEdit} ></button>
            <button className="fa-solid fa-trash btnDelete" onClick={deleteUserBtn}></button>
            </div>
        </div>
    )
}


export { UserItem }