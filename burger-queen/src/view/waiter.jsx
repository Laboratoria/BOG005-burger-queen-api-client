import React from "react";
import { Navbar } from "../components/header/navBar";
import { ProductsWaiter } from "../components/waiter/waiterProducts";

const Waiter= () => {
    return (
        <div className="waiter_container" >
             <Navbar />
            <h1>vista de mesero en construcción</h1>
            <ProductsWaiter/>
        </div>
    )
}

export {Waiter}