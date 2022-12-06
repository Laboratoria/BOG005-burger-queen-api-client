import "../Styles/Order.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";
import { breakfast, lounch } from "../routes/routes";

// import Button from "react-bootstrap/Button";
// import React, { useState } from "react"

export function Desayuno() {
  return (
    <section id="desayuno" className="desayuno">
      <h1>DESAYUNO</h1>
    </section>
  );
}

export function Order() {
  const navigate = useNavigate();
  return (
    <section className="order">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Pedido</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link onClick={() => navigate(breakfast)}>Desayuno</Nav.Link>
              <Nav.Link  onClick={() => navigate(lounch)}>
                Almuerzo
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav>
        <h1 className="title"> Pedido </h1>
        <Button className="btn-cocina" variant="primary" type="submit" >
          Desayuno
        </Button>
        <Button className="btn-cocina" variant="primary" type="submit" >
          Almuerzo
        </Button>
        </nav> */}
      <Form.Control
        className="input-name"
        type="email"
        placeholder="Nombre del cliente"
      />
    </section>
  );
}
