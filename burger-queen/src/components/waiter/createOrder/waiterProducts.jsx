
import React, { useEffect } from "react";
import { useState } from "react";
import { BurgerContext } from "../../../context/indexContext";
import { listProducts } from "../../../petitions/productPetition";
import { MenuItem } from "./menuItem";


const ProductsWaiter = () => {

    const {products, 
        setProducts,  
        setOpenModal,
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

    const [menu, setMenu]= useState ()
    let lunch = products.filter(product=> product.type === 'Almuerzo')
    let breakfast = products.filter(product=> product.type === 'Desayuno')


    const viewBreakfastMenu =()=>{
        setMenu(true)
    }
    const viewLunchMenu = ()=>{
        setMenu(false)
    }
    const viewCart = ()=>{
        setOpenModal(true)
    }
    return (
        <div className="productsWaiter_container">
            <div className="btnMenu">
            <button className="btnBreakFast" onClick={viewBreakfastMenu}>Desayuno</button>
            <button className="btnLunch" onClick={viewLunchMenu}>Almuerzo</button>
            <button className= "fa-solid fa-cart-shopping btnCart" onClick={viewCart}></button>
            </div>
            <div className="menu_container">
                           { menu ?  breakfast.map(data => (<MenuItem key={data.id} id={data.id} image={data.image} name={data.name} price={data.price} type={data.type}/>))
                           : 
                            lunch.map(data => (<MenuItem key={data.id} id={data.id} image={data.image} name={data.name} price={data.price} type={data.type}/>))
                             }
            </div>
          
        </div>
    )
}

export {ProductsWaiter}