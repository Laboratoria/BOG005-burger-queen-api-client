import logo from "../img/LOGO LOGO.png";
// import loggo from "../img/FONDO-TABLET.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Styles/Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { order, orderDelivered } from "../routes/routes";
import axios from 'axios'

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
    axios.post(url, {
        email: email,
        password: password,
        headers: {
          "content-type": "application/json",
        }
      })
      .then((response) => {
        const role = response.data.user.role;
        switch (role) {
          case 'admin':
            navigate(orderDelivered)
            break;
          case "mesero":
            navigate(order);
            break;
          default:
            console.log("Usuario no existe");
        }
        localStorage.setItem("Token", response.data.accessToken);
        localStorage.setItem("userId", response.data.user.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const submit = (e) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   Data();
  // }, []);
  // const Data = async () => {
  //   const data = await fetch("http://localhost:8080/users", {
  //     method: "get",
  //     headers: {
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY3MDAxMzkzMiwiZXhwIjoxNjcwMDE3NTMyLCJzdWIiOiIyIn0.urbNxk3hcwDCurvLY7oZCZ36MD9VvvGIkWlH1b1u0m4",
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const users = await data.json();
  //   console.log("esta es mi data", users);
  // };

  return (
    <main>
      <div className="login">
        <img src={logo} alt="logo" className="logo_imagen" />
        {/* <img src={loggo} alt="logo" className="loggo_imagen" /> */}
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
