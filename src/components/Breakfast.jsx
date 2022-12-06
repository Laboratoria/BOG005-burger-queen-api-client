import "../Styles/Order.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
// import { IconName } from "react-icons/bs";
import icon from '../img/button-back.png'

export function Breakfast() {
  return (
    <section className="order-breakfast">
      <Nav className="nav">
        <Nav.Item>
          <Nav.Link href="/order"><img src={icon} alt="icon-back" className="icon-back" /></Nav.Link>
        </Nav.Item>
        <Nav.Link className='title-pedido'>
          DESAYUNO
        </Nav.Link>
        <Nav.Item>
          <Button variant="success">Enviar</Button>{" "}
        </Nav.Item>
      </Nav>
    </section>
  );
}
