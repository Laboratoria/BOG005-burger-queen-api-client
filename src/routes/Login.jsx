import "./styles/App.css";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { postUser } from "../petitions/userPetition";

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

    postUser(userEmail, userPassword)
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
            navigate("/Waiters");
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
    <form className='login'>
      <div className='form-container'>
        <input
          type='email'
          placeholder='Correo'
          name='username'
          value={userEmail}
          onChange={handleChangeEmail}
        />
        <input
          type='password'
          placeholder='Contraseña'
          name='pass'
          value={userPassword}
          onChange={handleChangePassword}
        />
        <p id='errorMessage'></p>
        <div className='buttons-container'>
          <button className='btn-start' onClick={() => navigate("/")}>
            REGRESAR
          </button>
          <button className='btn-return' onClick={userAuth}>
            INGRESAR
          </button>
        </div>
      </div>
    </form>
  );
};

// email: mesero@burger.com
// password: 123456


export default Login;

