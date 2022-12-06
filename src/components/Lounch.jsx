import "../Styles/Order.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import icon from '../img/button-back.png'

export function Lounch() {
  return (
    <section className="order-lounch">
      <Nav>
      <Nav.Item>
          <Nav.Link href="/order"><img src={icon} alt="icon-back" className="icon-back" /></Nav.Link>
        </Nav.Item>
        <Nav.Link className='title-pedido'>
          Almuerzo
        </Nav.Link>
        <Nav.Item>
          <Button variant="success">Enviar</Button>{" "}
        </Nav.Item>
      </Nav>
    </section>
  );
}
