import React from "react";
import { deleteUser, editUser } from "../../../petitions/userPetition";
import { BurgerContext } from "../../../context/indexContext";


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
        deleteUser(props.id, props)
        console.log(users);
        // filtra el estado para volverlo a renderizar
        const arrayFilterUser = users.filter(user => user.id !== props.id )
       setUsers(arrayFilterUser)
    }

    const saveUserEdit = (e) => {
        console.log('estado1',users);
        setEditUserState(true)
        setOpenModal(true)
        setDataNewUser({
            ...dataNewUser,
            // [e.target.name]: props.value
            email: props.email,
            role: props.role,
        });
        editUser(props.id, props)
            .then((response) => {
                console.log('estado2',users);
                return response
            })
            .catch((error) => {
                return error
            })
        e.target.reset();
        return dataNewUser
    }



    return (
        <div className="userItem_Container">
            <p>{props.email}</p>
            <p>{props.role}</p>
            <button className="fa-solid fa-pen-to-square" onClick={saveUserEdit} ></button>
            <button className="fa-solid fa-trash btnDelete" onClick={deleteUserBtn}></button>
        </div>
    )
}


export { UserItem }