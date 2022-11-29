import logo from "../img/LOGO LOGO.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";
export function Login() {
  return (
    <main>
      <div className="login">
      <img src={logo} alt="logo" className="logo_imagen"/>
        <section className="container_form">
      
        <Form className="login_form">
        <h1 className="login_title">Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      
        <Form.Control type="email" placeholder="Correo electrónico" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">

        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
    </section>
      </div>


    </main>
  );
}
