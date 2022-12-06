import "../Styles/Order.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import React, { useState } from "react"

export function Order(){
    return (
      <section className="order">
        <nav>
        <h1 className="title"> Pedido </h1>
        <Button className="btn-cocina" variant="primary" type="submit" >
          Enviar a cocina
        </Button>
        </nav>
         <Form.Control
          className="input-name"
          type="email"
          placeholder="Nombre del cliente"
        />
      </section>
    );
}
