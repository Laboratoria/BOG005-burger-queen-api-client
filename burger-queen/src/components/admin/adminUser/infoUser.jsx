import React from "react";
import { deleteUser} from "../../../petitions/userPetition";
// import { EditUserComponent } from "./editUser";


const UserItem = (props)=>{

    const deleteUserBtn = ()=>{
        deleteUser(props.id, props)
    }

    
    // const editUserBtn =(e, props)=>{
    //     setEditState(true)
        
    //     if(editState === true){

    //          setDataLogin({
    //             ...dataLogin,
    //             [e.target.name]: props.name
    //         });
    //     }
    //     // editUser(props.id, props)
    // }
    // const [editState, setEditState] = useState(false)

    // const saveUserEdit = ()=>{
    //     setEditState(true)
    //     sessionStorage.setItem('editUser', JSON.stringify(props));
    //     sessionStorage.setItem('editState', JSON.stringify(editState));
    // }

    return (
        <div className="userItem_Container">
             <p>{props.email}</p>
             <p>{props.role}</p>
             <button className="fa-solid fa-pen-to-square" ></button>
             {/* onClick={saveUserEdit} */}
           

             <button className="fa-solid fa-trash btnDelete" onClick={deleteUserBtn}></button>
        </div>
    )
}


export {UserItem}