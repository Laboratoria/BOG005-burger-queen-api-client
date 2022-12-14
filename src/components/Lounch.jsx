import "../Styles/Order.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import icon from "../img/button-back.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export function Lounch() {
  return (
    <section className="order-lounch">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Pedido</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link to="/breakfast">Desayuno</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Nav>
        <Nav.Item>
          <Nav.Link>
            <Link to="/order">
              <img src={icon} alt="icon-back" className="icon-back" />
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Link className="title-pedido">Almuerzo</Nav.Link>
        <Nav.Item>
          <Button variant="success">ENVIAR</Button>{" "}
        </Nav.Item>
      </Nav>
    </section>
  );
}
