import "../Styles/Order.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

export function Breakfast() {
  return (
    <section className="order">
      <Nav className="nav">
        <Nav.Item>
          <Nav.Link href="/order">Atrás</Nav.Link>
        </Nav.Item>
        <Nav.Link className='title-desayuno'>
          DESAYUNO
        </Nav.Link>
        <Nav.Item>
          <Button variant="success">Enviar</Button>{" "}
        </Nav.Item>
      </Nav>
    </section>
  );
}
