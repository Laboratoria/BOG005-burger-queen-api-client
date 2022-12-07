import React from "react";



function Order() {
    return (
        <section className="orderProdSect">
            <section className="orderProdForm">
                <h2 className="titleOrderProduct">
                    Orden de Pedido
                </h2>

                <form className="orderForm" onSubmit={(event) => onSubmitCreateFormHandler(event, nameProduct, priceProduct, typeMenu, imgProduct)} >

                    <label id="textOrder">Número de la orden</label>
                    <input
                        className="orderProductInput"
                        type='text'
                        name="numOrder"
                    // onChange={numOrderHandler}
                    />
                    <label id="nameOrder">Nombre del cliente</label>
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
                            <tbody className="bodyOrder">
                                <tr>
                                    <td>Hamburguesa</td>
                                    <td>2</td>
                                    <td>10.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section className="tableOrderTotal">Total: $0.00</section>
                    <button type="submit" className="orderAddBtn">
                        Agregar Producto
                    </button>
                    <button className="cancelOrderBtn">
                        Cancelar
                    </button>
                </form>
            </section>
        </section>

    )
}


export { Order };
