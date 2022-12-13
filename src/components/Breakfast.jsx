import "../Styles/Order.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import icon from "../img/button-back.png";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";



export function Breakfast() {
  const url = "http://localhost:8080/products";
  const [products, setProducts] = useState([]);


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
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="">Pedido</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
        <Nav.Link > <Link to="/lounch" >Almuerzo</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      <Nav className="nav">
        <Nav.Item>
        <Nav.Link ><Link to="/order" ><img src={icon} alt="icon-back" className="icon-back" /></Link></Nav.Link>
        </Nav.Item>
        <h1 className="title-pedido">Desayuno</h1>
        <Nav.Item>
          <Button variant="success">ENVIAR</Button>{" "}
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
