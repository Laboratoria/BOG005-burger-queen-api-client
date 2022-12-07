import React, { useState, useEffect } from "react";
import {
   
} from "../utils/petitions.js";
import { Header } from "../components/header";
import { Order } from "../components/ordenPedido";
import { OrderMenu } from "../components/orderMenu.jsx";



function WaiterView() {
   

    return ( // Maqueta componente Admin view
        <main className="adminView">
            <Header>
                <nav className="navMenu">
                    <ul className="navAMenu">
                        <li><a className="navLink" href="/admin-products">Home</a></li>
                        <li><a className="navLink" href="/admin-usuarios">Ordenes</a></li>
                        <li><a className="navLink" href="/">Salir</a></li>
                    </ul>
                </nav>
            </Header>
            
        <OrderMenu
        //  image={product.image}
        //  name={product.name}
        //  price={product.price}
        />
        <Order/>
    

        </main>



    )
}

export { WaiterView }