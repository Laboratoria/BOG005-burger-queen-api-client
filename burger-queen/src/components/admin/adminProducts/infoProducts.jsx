import React from "react";
import { deleteUser } from "../../../petitions/userPetition";
import { BurgerContext } from "../../../context/indexContext";


const ProductsItem = (props) => {
    const {products,
        setProducts,
    } = React.useContext(BurgerContext);

    const deleteUserBtn = () => {
    //     deleteUser(props.id, props)
    //     console.log(users);
    //     // filtra el estado para volverlo a renderizar
    //     const arrayFilterUser = users.filter(user => user.id !== props.id )
    //    setUsers(arrayFilterUser)
    }

    const saveUserEdit = (e) => {
        // console.log('estado1',users);
        // setEditUserState(true)
        // setOpenModal(true)
        // setDataNewUser({
        //     ...dataNewUser,
        //     email: props.email,
        //     password: props.password,
        //     role: props.role,
        //     id: props.id
        // });
        // e.target.reset();
        // return dataNewUser
    }



    return (
        <div className="productItem_Container">
            <img src={props.image} alt={props.item1} className='imgProduct' />
            <p className="product">{props.item1}</p>
            <p className="price">{props.item2}</p>
            <p className="type">{props.item3}</p>
            <div className="buttonProducts">
            <button className="fa-solid fa-pen-to-square" onClick={saveUserEdit} ></button>
            <button className="fa-solid fa-trash btnDelete" onClick={deleteUserBtn}></button>
            </div>
        </div>
    )
}


export { ProductsItem }