import '../components/Waiters.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ProductTable from "./ProductsTable";

const Waiters = () => {
  const productData = [
    {
      id: 1,
      name: "Café Americano",
      price: 5,
      image: "../img/cafeamericano.jpeg",
      type: "Desayuno",
    },
    {
      id: 2,
      name: "Café con leche",
      price: 7,
      image: "https://ibb.co/HXnKndy",
      type: "Desayuno",
    },
    {
      id: 3,
      name: "Sandwich de jamón y queso",
      price: 10,
      image: "../img/sandwich.jpeg",
      type: "Desayuno",
    },
    {
      id: 4,
      name: "Hamburguesa simple",
      price: 10,
      image: "../img/burger.png",
      type: "Almuerzo",
    },
  ];

  const navigate = useNavigate();

  const [products, setProducts] = useState(productData);

  return (
    <section className='waiterOrders'>
      <h1>BURGER QUEEN TELECOMANDA </h1>
      <div className='linkWaiter'>
        <Link className='linkOrders' to='/Waiters'>
          Pedidos
        </Link>{" "}
        <Link className='linkStatus' to='/Waiters'>
          Estado
        </Link>
      </div>
      <div className='takeOrders'>
        <h2>AGREGAR PRODUCTOS</h2>
      </div>
      <h4 className='orderNum'>Nº de orden</h4>
      <input className='orderNumber' type='number'></input>
      <div className='flex-large'>
        <h2>View products</h2>
        <ProductTable products={products} />
      </div>
      <div className='buttonsWaiter'>
        <button className='hola' onClick={() => navigate("/Login")}>
          REGRESAR
        </button>
        <button className='hola' onClick={() => alert("Producto cargado")}>
          CONFIRMAR
        </button>
      </div>
    </section>
  );
};
export default Waiters;
