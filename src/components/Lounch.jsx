import "../Styles/Order.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

export function Lounch() {
  return (
    <section className="order">
      <Nav>
        <Nav.Item>
          <Nav.Link href="/order">Atrás</Nav.Link>
        </Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Almuerzo
        </Nav.Link>
        <Nav.Item>
          <Button variant="success">Enviar</Button>{" "}
        </Nav.Item>
      </Nav>
    </section>
  );
}
