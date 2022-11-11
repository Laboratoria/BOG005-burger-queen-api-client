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
        setOpenModal(true)
     }

    return (
        <div className="adminUser_container">
            <h2>Administrar productos</h2>
            <div className="tableUser_container">
                <div className="tableHeader">
                    <h4 className="products">Productos</h4>
                    <h4 className="price">Precio</h4>
                    <h4 className="type">Menú</h4>
                    <h4 className="actions">Acciones</h4>
                </div>
                {/* map de productos */}
                <div className="table">
                {products.map(data => (<ProductsItem key={data.id} id={data.id} image={data.image} item1={data.name} item2={data.price} item3={data.type}/>))}
                </div>
            </div>
          
             {!!openModal && (
                    <Modal>
                        <AddProducto/>
                    </Modal>
                )}

                <button onClick={onClickBtn} setOpenModal={setOpenModal} className='btnAddUser'>Agregar Usuario</button>

           
        
        </div>
    )
}

export { AdminProducts }

