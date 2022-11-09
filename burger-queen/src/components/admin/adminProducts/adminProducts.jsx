import React, { useEffect } from "react";
// import { Modal } from "../../modal/modal.jsx";
import { BurgerContext } from "../../../context/indexContext.jsx";
import { listProducts } from "../../../petitions/productPetition.js";
import { UserItem } from "../adminUser/infoUser.jsx";

const AdminProducts = () => {
    //traer estados del contexto
    const { products,
        setProducts,
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

    return (
        <div className="adminUser_container">
            <h2>Administrar productos</h2>
            <div className="tableUser_container">
                <div className="tableHeader">
                    <h4 className="productos">Productos</h4>
                    <h4 className="precio">Precio</h4>
                    <h4 className="acciones">Acciones</h4>
                </div>
                {/* map de productos */}
                {products.map(data => (<UserItem key={data.id} id={data.id} item1={data.name} item2={data.price} />))}
            </div>
        
        </div>
    )
}

export { AdminProducts }

