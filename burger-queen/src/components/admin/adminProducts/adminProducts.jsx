import React, { useEffect } from "react";
// import { Modal } from "../../modal/modal.jsx";
import { BurgerContext } from "../../../context/indexContext.jsx";
import { listProducts } from "../../../petitions/productPetition.js";
// import { UserItem } from "../adminUser/infoUser.jsx";
import { ProductsItem } from "./infoProducts.jsx";
import { AddProducto } from "./createProduct.jsx";
import { Modal } from "../../modal/modal.jsx";

const AdminProducts = () => {
    //traer estados del contexto
    const { products,
        setProducts,
        openModal,
        setOpenModal,
        setnewProduct,
    } = React.useContext(BurgerContext);
    //peticion pedir productos

    const getListProducts = () => {
        listProducts().then(res => {
            setProducts(res.data.map((product) => {
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    type: product.type,
                }
            }))
        })
    }
    useEffect(() => { getListProducts() } , [])

     const onClickBtn = ()=>{
        setnewProduct([])
        setOpenModal(true)
     }

    return (
        <div className="adminUser_container adminProduct_container">
            <h2>Administrar Productos</h2>
            <div className="tableUser_container tableProduct_container">
                <div className="tableHeader tableProductHeader">
                    <h4 className="products">Productos</h4>
                    <h4 className="price">Precio</h4>
                    <h4 className="type">Menú</h4>
                    <h4 className="actions">Acciones</h4>
                </div>
                {/* map de productos */}
                <div className="table">
                {products.map(data => (<ProductsItem key={data.id} id={data.id} image={data.image} name={data.name} price={data.price} type={data.type}/>))}
                </div>
            </div>
          
             {!!openModal && (
                    <Modal>
                        <AddProducto/>
                    </Modal>
                )}

                <button onClick={onClickBtn} setOpenModal={setOpenModal} className='btnAddUser btnAddProduct'>Agregar Producto</button>

           
        
        </div>
    )
}

export { AdminProducts }

