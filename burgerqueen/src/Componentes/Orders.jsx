import React from "react";
import logo from '../resources/Burger-King-logo-removebg-preview 2.png';
import '../style/styleOrders.css'

const Orders = () => {

    return (
        <section className="containerOrders">
            <div className="header">
                <div>
                    <img src={logo} alt={logo} className="logo" />
                </div>
                <ul className="ulHerder">
                    <li className="listaHerder"><a href="/Products">Productos</a></li>
                    <li className="listaHerder"><a href="/orders">Pedidos</a></li>
                </ul>
            </div>

            <section className="estadoPedido">
            </section>

            <section className="estadoPedido">


            </section>
        </section >
    )

}

export default Orders;