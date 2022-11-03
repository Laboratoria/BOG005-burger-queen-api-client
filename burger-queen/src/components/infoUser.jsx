import React from "react";

const UserItem = (props)=>{
    return (
        <div className="userItem_Container">
             <p>{props.email}</p>
             <p>{props.role}</p>
             <button className="fa-solid fa-pen-to-square"></button>
             <button className="fa-solid fa-trash"></button>
        </div>
    )
}


export {UserItem}