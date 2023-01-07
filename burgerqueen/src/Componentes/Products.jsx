import React, { useEffect, useState } from "react";
import Productos from '../api'
import logo from '../resources/Burger-King-logo-removebg-preview 2.png';
import '../style/styleProductos.css';


const Products = () => {

    const [producto, setproducto] = useState(null);
    const [menu, setmenu] = useState([]);
    const [agregado, setagregado] = useState([]);
    const [total, setTotal] = useState(0);

    // useEffect accede a las variables del estado
    useEffect(() => {
        Productos(setproducto);
        if(agregado.length){

            setTotal(agregado.reduce((acumulador, { price, quantity }) => acumulador + (price * quantity), 0))
        }

    }, [agregado])

    const cambiaMenu = (event) => {
        // console.log(producto)
        const result = producto.filter(item => item.type.toLowerCase() === event.target.id);
        // console.log(result)
        setmenu(result)
        console.log()
    }

    const agregarPoductos = (produc) => {
        if (agregado.length) {
            if (agregado.find(item => item.id === produc.id)) {
                const product = agregado.map(item =>
                    item.id === produc.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );

                // return 
                setagregado([...product])
            } else {
                setagregado([...agregado, { ...produc, quantity: 1 }])
            }


        } else {
            setagregado([...agregado, { ...produc, quantity: 1 }])
            setTotal(produc.price)
        }     

    }

    // console.log(agregado)
    // console.log(agregado.reduce((acumulador, { price, quantity }) => acumulador + (price * quantity), 0));


    const remove = (produc) => {
        console.log('remover')

    }

    const agre = (produc) => {
        console.log('agregar')

    }

    return (

        <section className="h-100" >

            <div className="header">
                <div>
                    <img src={logo} alt={logo} className="logo" />
                </div>
                <ul className="ulHerder">
                    <li className="listaHerder"><a href="/Products">Productos</a></li>
                    <li className="listaHerder"><a href="/orders">Pedidos</a></li>
                </ul>
            </div>

            <section className="vistaProductos">
                <div className="ulOrdenes">
                    <button type="button" className="butonPro" id="desayuno" onClick={cambiaMenu}>Desayunos</button>
                    <button type="button" className="butonPro" id="almuerzo" onClick={cambiaMenu}>Almuerzo</button>
                </div>

                <section className="sectionProducto">
                    <div className="listProduc">
                        {menu !== null ? (
                            menu.map(produc => (
                                <section key={produc.id} className="cardProducto">
                                    <img src={produc.image} alt="" className="imgProduct" />
                                    <p className="nombreProducto" >{produc.name} </p>
                                    <p className="precio">${produc.price}</p>
                                    <button className="agreagar" type="button" onClick={() => agregarPoductos(produc)}>Añadir</button>
                                </section>
                            ))
                        ) : ('El token ha expirado, Porfvaor vuelva a entrar para generar un nuevo')
                        }
                    </div>


                    {/* //produstos agragados */}
                    <div className="lisProductosAdd" >
                        {/* <h2 className="tituloAgregado">Productos agregados</h2> */}
                        <section className="car">
                            {agregado.map(producAdd => (
                                <div className="carProductosAdd" key={producAdd.id}>
                                    <p className="nombreProductoAdd" >{producAdd.name} </p>
                                    <p className="precioProducAdd">${producAdd.price} </p>
                                    <div className="conCantidad">
                                        <button className="cantidades" onClick={remove}>-</button><p className="cantidad">{producAdd.quantity}</p><button className="cantidades" onClick={agre}>+</button>
                                        <button className="eliminarProducto" >Elimina</button>
                                    </div>
                                    <hr />
                                </div>
                            ))
                            }
                        </section>
                        <p>Total: {total}</p>
                        <div className="botonesAddConfirmar">
                            <button className="cancelar">Cancelar</button>
                            <button className="confirmar">Confirmar</button>
                        </div>
                    </div>
                </section>
            </section>

        </section>

    )
}

export default Products;