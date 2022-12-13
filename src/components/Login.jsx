import logo from "../img/FONDITO.png";
// import loggo from "../img/FONDO-TABLET.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Styles/Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { order, orderDelivered } from "../routes/routes";
import axios from "axios";
import Swal from "sweetalert2";
// import swal from 'sweetalert';

const url = "http://localhost:8080/login";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const managementEmail = (e) => {
    setEmail(e.target.value);
  };

  const managementPassword = (e) => {
    setPassword(e.target.value);
  };

  const loginSesion = () => {
    axios
      .post(url, {
        email: email,
        password: password,
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        const role = response.data.user.role;
        switch (role) {
          case "admin":
            navigate(orderDelivered);
            break;
          case "mesero":
            navigate(order);
            break;
          case "":
            console.log("INGRESE SUS DATOS");
            break;
          default:
        }
        localStorage.setItem("Token", response.data.accessToken);
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("email", response.data.user.email);
        localStorage.setItem("role", response.data.user.role);


      })
      .catch((err) => {
        if (email === "" || password === "") {
          Swal.fire({title:'¡Debes llenar ambos campos!',
          confirmButtonColor:'#dd7a1e'})


        } else {
          Swal.fire({
            
            icon: "error",
            title: "Oops...",
            text: "¡Datos incorrectos!",
            footer: "<p class='text-center'>Vuelve a intentarlo o <br> consulte con el <br> administrador </p>",
            confirmButtonColor:'#dd7a1e',
          })(err);
        }
      });
  };
  const submit = (e) => {
    e.preventDefault();
  };

 

  return (
    <main>
      <div className="login">
         <img src={logo} alt="logo" className="logo_imagen" />
        <section className="container_form">
          <Form className="login_form" onSubmit={submit}>
            <h1 className="login_title">Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Correo electrónico"
                onChange={managementEmail}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Contraseña"
                onChange={managementPassword}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={() => loginSesion()}
            >
              Ingresar
            </Button>
          </Form>
        </section>
      </div>
    </main>
  );
}
// const login = (email, password) => {
//   if (email === "lore@gmail.com" && password === "123456") {
//     console.log("tu correo o contraseña  son correctos", email, password);
//   } else {
//     alert("tu correo o contraseña no  son correctos");
//   }
// };
