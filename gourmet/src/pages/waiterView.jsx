import React, { useState, useEffect } from "react";
import {
   
} from "../utils/petitions.js";
import { Header } from "../components/header";


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

            <section className="orderProdSect">
                <section className="orderProdForm">
                    <h2 className="titleOrderProduct">
                        Orden de Pedido
                    </h2>

                    <form className="orderForm" onSubmit={(event) => onSubmitCreateFormHandler(event, nameProduct, priceProduct, typeMenu, imgProduct)} >

                        <p id="textOrder">Número de la orden</p>
                        <input
                            className="orderProductInput"
                            type='text'
                            name="numOrder"
                            // onChange={numOrderHandler}
                        />
                        <p id="nameOrder">Nombre del cliente</p>
                        <input
                            className="orderProductInput"
                            type='text'
                            name="nameClientOrder"
                            // onChange={nameOrderHandler}
                        />

                        <section className="boxOrderSection">
                            <table className="boxOrder">
                                <thead className="tableOrder">
                                    <tr className="rowOrder">
                                        <th className="titleNameOrder">Nombre</th>
                                        <th className="titleCuantOrder">Cantidad</th>
                                        <th className="titlePriceOrder">Precio</th>
                                        <th className="titleDeleteOrder">Eliminar</th>
                                    </tr>
                                </thead>
                            </table>
                        </section>
                        <section class="table-order-total">Total: $0.00</section>
                        <button type="submit" className="addProdModalBtn">
                            Agregar Producto
                        </button>
                        <button className="cancelAddProdBtn">
                            Cancelar
                        </button>
                    </form>
                </section>
            </section>







        </main>



    )
}

export { WaiterView }