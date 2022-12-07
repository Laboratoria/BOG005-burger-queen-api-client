import "../Styles/Order.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
// import { IconName } from "react-icons/bs";
import icon from "../img/button-back.png";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import useEfrom "react"

export function Breakfast() {
  const url = "http://localhost:8080/products";
  const [product, setProducts] = useState([]);
// const userData = () =>{
//     return JSON.parse(sessionStorage.getItem('user'))
// }
// const getToken = () =>{
//     return userData().accessToken

// }
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
      })
      .then(response => {
        setProducts(response.data);
        console.log(response.data)
      } )
      .catch(err => {
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
        <Nav.Link className="title-pedido">DESAYUNO</Nav.Link>
        <Nav.Item>
          <Button variant="success">Enviar</Button>{" "}
        </Nav.Item>
      </Nav>
    </section>
  );
}
