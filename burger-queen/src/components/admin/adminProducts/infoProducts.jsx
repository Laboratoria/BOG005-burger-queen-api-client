import React from "react";
import { deleteProduct } from "../../../petitions/productPetition";
import { BurgerContext } from "../../../context/indexContext";


const ProductsItem = (props) => {
    const {products,
        setProducts,
        editProductState,
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
        setEditProductState(false)
        setOpenModal(true)
        setnewProduct({
            ...newProduct,
            name: '',
            price: 0,
            image: 'url',
            dateEntry: new Date(),
        });
        e.target.reset();
        return newProduct
    }



    return (
        <div className="productItem_Container">
            <img src={props.image} alt={props.item1} className='imgProduct' />
            <p className="product">{props.item1}</p>
            <p className="price">{props.item2}</p>
            <p className="type">{props.item3}</p>
            <div className="buttonProducts">
            <button className="fa-solid fa-pen-to-square" onClick={saveProductEdit} ></button>
            <button className="fa-solid fa-trash btnDelete" onClick={deleteProductBtn}></button>
            </div>
        </div>
    )
}


export { ProductsItem }