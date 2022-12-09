import "../Styles/Order.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import icon from "../img/button-back.png";
import axios from "axios";
import React, { useEffect, useState } from "react";


export function Breakfast() {
  const url = "http://localhost:8080/products";
  const [products, setProducts] = useState([]);

  function  Prueba(props){
    const elementos = props.product
    const itemsProducts = elementos.map((item) => (
      <li key={item}> name:{item.name} tipo: {item.type}</li>)
      
      )
      // console.log(itemsProducts[0])
     

  }
  console.log(Prueba)



  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
      .then((response) => {
        setProducts(response.data);

        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <section className="order-breakfast">
      <Nav className="nav">
        <Nav.Item>
          <Nav.Link href="/order">
            <img src={icon} alt="icon-back" className="icon-back" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="title-pedido">DESAYUNO</Nav.Item>
        <Nav.Item>
          <Button variant="success">Enviar</Button>{" "}
        </Nav.Item>
      </Nav>
      <main>
        {
          products.map((item) => (
            <li key={item.id}> Producto: {item.name}, Precio: {item.price}</li>
          ))
        }
      </main>
    </section>
  );
}
