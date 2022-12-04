import React, { useEffect, useState } from "react";
import Productos from '../api'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../resources/Burger-King-logo-removebg-preview 2.png';
import '../style/styleorden.css';


const Orders = () => {

    const [producto, setproducto] = useState(null)

    // useEffect accede a las variables del estado
    useEffect(() => {
        Productos(setproducto);
    }, [])


    return (

        <section className="container">
            <div className="header">
                <div>
                    <img src={logo} alt={logo} className="logo" />
                </div>
                <ul className="ulHerder">
                    <li className="listaHerder">Productos</li>
                    <li className="listaHerder">Pedidos</li>
                </ul>
            </div>

            <section className="vistaOrdenes">
                <ul className="ulOrdenes">
                    <li className="liOrdenes">Desayuno</li>
                    <li className="liOrdenes">Almuerzo</li>
                </ul>

                <section className="sectionProducto">
                    {producto !== null ? (
                        producto.map(produc => (
                            <section className="cardProducto">
                                <img src={produc.image} alt="" className="imgProduct" />
                                <p className="nombreProducto" >{produc.name} </p>
                            </section>
                        ))
                    ) :  ('El token ha expirado')
                    }
                </section>

            </section>
            <div className="BotonVerOrden">
                <button id="verOrden"><a href="/VerOrden">Ver orden</a></button>
            </div>
        </section>


    )
}

export default Orders;

