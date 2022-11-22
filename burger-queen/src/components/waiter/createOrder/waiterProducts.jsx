
import React, { useEffect } from "react";
import { BurgerContext } from "../../../context/indexContext";
import { listProducts } from "../../../petitions/productPetition";
import { MenuItem } from "./menuItem";


const ProductsWaiter = () => {

    const {products, 
        setProducts,  
    } = React.useContext(BurgerContext);
    
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
        <div className="productsWaiter_container">
            <div className="btnMenu">
            <button className="btnBreakFast">Desayuno</button>
            <button className="btnLunch">Almuerzo</button>
            </div>
            <div className="menu_container">
            {products.map(data => (<MenuItem key={data.id} id={data.id} image={data.image} name={data.name} price={data.price} type={data.type}/>))}
            </div>
          
        </div>
    )
}

export {ProductsWaiter}