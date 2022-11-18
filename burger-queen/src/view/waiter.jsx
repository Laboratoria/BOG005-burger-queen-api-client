import React from "react";
import { Navbar } from "../components/header/navBar";
import { Cart } from "../components/waiter/cart";
import { ProductsWaiter } from "../components/waiter/waiterProducts";



const Waiter= () => {
    return (
        <div className="waiter_container" >
             <Navbar />
            <h1>vista de mesero en construcción</h1>
            <ProductsWaiter/>
            <Cart/>
        </div>
    )
}

export {Waiter}