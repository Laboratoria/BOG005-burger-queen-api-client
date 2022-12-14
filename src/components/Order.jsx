import "../Styles/Order.css";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { breakfast, lounch } from "../routes/routes";
import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import mesero from "../img/mesero.png";
// import { Breakfast } from "./breakfast";
import Button from "react-bootstrap/Button";
 import React, { useState } from "react"

import { Link } from "react-router-dom";

export function Order() {
   

  return (
    <section className="order">
      <h1 className="title">Bienvenido</h1>
      <p className="usuario-email">{localStorage.getItem("email")}</p>

      <Card className="card">
        <Card.Img src={mesero} alt="img-mesero" className="img-mesero" />
        <Card.Body>
          <Card.Title>Mesero</Card.Title>
          <Card.Text className="text-cards">
            Elige la opción para tomar pedido:
          </Card.Text>
          <div className="options-buttons-order">
            <Link to="/breakfast">
              {" "}
              <Button className="button-desayuno" variant="primary" size="lg">
                Desayuno
              </Button>
            </Link>
            <Link to="/lounch">
              {" "}
              <Button variant="secondary" size="lg">
                Almuerzo
              </Button>{" "}
            </Link>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
}
