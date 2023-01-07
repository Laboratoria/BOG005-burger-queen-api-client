import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../img/logo.png"
import loginUser from "../petitions/axios"
import Swal from "sweetalert2";




const Login = () => {
  useEffect(() => {
    showAlert();
  }, []);

  const showAlert = () => {
    // Swal.fire("Bienvenida, por favor ingresa tus credenciales")
  };

  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleChangeEmail = (event) => {
    setUserEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setUserPassword(event.target.value);
  };

  const userAuth = (event) => {
    event.preventDefault();

    console.log(userEmail);
    console.log(userPassword);

    loginUser(userEmail, userPassword)
      .then((response) => {
        console.log(response);

        const errorMessage = document.getElementById("errorMessage");
        errorMessage.innerHTML = "";

        if (response.status === 200) {
          if (response.data.user.role === "admin") {
            navigate("/Admin");
            Swal.fire("Ten un excelente turno, admin!");
          }
          else if (response.data.user.role === "mesero") {
            navigate("Products/");
            Swal.fire("Ten un excelente turno, mesero!");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data === "Incorrect password") {
          Swal.fire("Contraseña incorrecta", "Intenta de nuevo", "error");
        } else {
          Swal.fire(
            "Usuario no encontrado",
            "Comunícate con la administración",
            "warning"
          );
        }
      });
  };

  return (
    <div className="h-100 contForm ">
      <div >
        <img src={logo} alt={logo} className="logoForm" />
      </div>

      <form className='card  h-50 w-50 shadow-lg p-3 mb-5 bg-white rounded  opacity-0.5;'>
        <div className='form-container text-center'>
          <h2 className="tittle-login">LOGIN</h2>
          <div className="form-group input-group p-2"  >
            <input className="form-control"
              type='email'
              placeholder='Correo'
              name='username'
              value={userEmail}
              onChange={handleChangeEmail}
            />
          </div>

          <div className="form-group input-group p-2"  >
            <input
              type='password'
              placeholder='Contraseña'
              name='pass'
              value={userPassword}
              onChange={handleChangePassword}
            />
          </div>
          <p id='errorMessage'></p>
          <div className='button-container-login'>
            <button className='btn-login bg-warning text-dark bg-opacity-50' onClick={userAuth}>
              INGRESAR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

// email: mesero@burger.com
// password: 123456


export default Login;