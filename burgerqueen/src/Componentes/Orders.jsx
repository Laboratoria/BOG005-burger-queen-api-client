import React, { useEffect, useState } from "react";
import Productos from '../api'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../resources/Burger-King-logo-removebg-preview 2.png';
import '../style/styleorden.css';


const Orders = () => {

    const [producto, setproducto] = useState(null);
    const [menu, setmenu] = useState([]);
    // useEffect accede a las variables del estado
    useEffect(() => {
        Productos(setproducto);
    }, [])

    const cambiaMenu = (event) =>{
        // console.log(producto)
        const result = producto.filter(item => item.type.toLowerCase() === event.target.id);
        // console.log(result)
        setmenu(result)
    }


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
                <div className="ulOrdenes">
                <button type="button" className="butonPro" id="desayuno" onClick={cambiaMenu}>Desayunos</button>
                <button type="button" className="butonPro" id="almuerzo" onClick={cambiaMenu}>Almuerzo</button>
                </div>

                <section className="sectionProducto">
                    {menu !== null ? (
                        menu.map(produc => (
                            <section className="cardProducto">
                                <img src={produc.image} alt="" className="imgProduct" />
                                <p className="nombreProducto" >{produc.name} </p>
                            </section>
                        ))
                    ) :  ('El token ha expirado, Porfvaor vuelva a entrar para generar un nuevo')
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

