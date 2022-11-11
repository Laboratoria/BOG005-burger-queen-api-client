import React from "react";
import { deleteProduct } from "../../../petitions/productPetition";
import { BurgerContext } from "../../../context/indexContext";


const ProductsItem = (props) => {
    const {products,
        setProducts,
        // editProductState,
        setEditProductState,
        setOpenModal,
        newProduct,
        setnewProduct,
    } = React.useContext(BurgerContext);

    const deleteProductBtn = () => {
        deleteProduct(props.id, props)
        console.log(products);
    //     // filtra el estado para volverlo a renderizar
        const arrayFilterProduct = products.filter(product => product.id !== props.id )
       setProducts(arrayFilterProduct)
    }

    const saveProductEdit = (e) => {
        // console.log('estado1',users);
        setEditProductState(true)
        setOpenModal(true)
        console.log('prop', props);
        setnewProduct({
            ...newProduct,
            name: props.name,
            price: props.price,
            image: props.image,
            dateEntry: new Date(),
            id: props.id
        });
        console.log('np',newProduct);
        return newProduct
    }



    return (
        <div className="productItem_Container">
            <img src={props.image} alt={props.name} className='imgProduct' />
            <p className="product">{props.name}</p>
            <p className="price">{props.price}</p>
            <p className="type">{props.type}</p>
            <div className="buttonProducts">
            <button className="fa-solid fa-pen-to-square" onClick={saveProductEdit} ></button>
            <button className="fa-solid fa-trash btnDelete" onClick={deleteProductBtn}></button>
            </div>
        </div>
    )
}


export { ProductsItem }