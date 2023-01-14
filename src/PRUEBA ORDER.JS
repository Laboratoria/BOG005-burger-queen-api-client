import "../Styles/Order.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";
import { breakfast, lounch } from "../routes/routes";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import mesero from "../img/mesero.png";
// import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Breakfast } from "./Breakfast";

function Order() {

  const navigate = useNavigate();
  console.log(navigate)
  const url = "http://localhost:8080/products";
  const [products, setProducts] = useState([]);
  let state = false;
  console.log(state)

  // const resultProducts = products.map(products => <div>{products.name}</div>)

  const Prueba = ()=>{
    state = true
    navigate(breakfast)
    console.log(state)

    
  }
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
        
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 
  // console.log(products)
  // Breakfast(products)
  if(!state){
    console.log(state)
    return (
      <section className="order">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="">Pedido</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <div>
                  <Nav>
                    <Nav.Link onClick={() => Prueba() }>
                      Desayuno
                    </Nav.Link>
                    <Nav.Link onClick={() => navigate(lounch)}>Almuerzo</Nav.Link>
                  </Nav>

              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Form.Control
          className="input-name"
          type="email"
          placeholder="Nombre del cliente"
        />
        <Card className="card">
          <Card.Img src={mesero} alt="img-mesero" className="img-mesero" />
          <Card.Body>
            <Card.Title>TUTORIAL</Card.Title>
            <Card.Text className="text-cards">
              Recuerda los pasos que debes seguir para hacer tu pedido
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-pasos">
            <ListGroup.Item>1.Escriba el nombre del cliente</ListGroup.Item>
            <ListGroup.Item>2.Despliegue las opciones</ListGroup.Item>
            <ListGroup.Item>3.Selccione el menu que desee</ListGroup.Item>
          </ListGroup>
        </Card>
      </section>
    );
  }if(state){
    return(
      
      
      <Breakfast products={products.map(element => console.log(element.name))}  />
    
    )

  }

  console.log(navigate)

  }

   
//   return (
//     <div>
//         <Breakfast products={resultProducts}  />
//     </div>
//   );
// }


export { Order };