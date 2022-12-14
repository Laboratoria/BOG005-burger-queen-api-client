 import React from "react";
 import { useNavigate } from "react-router-dom";
 import { useState, useEffect} from "react";
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
        if (error.response.data === "Incorrect password"){
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
    <article className="principal-login">
      <img src={logo} alt="logotipo"/>
    <form className='login'>
      <div className='form-container'>
      <h1 className="tittle-login">LOGIN</h1>
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
        <div className='button-container-login'>
          <button className='btn-login' onClick={userAuth}>
            INGRESAR
          </button>
        </div>
      </div>
    </form>
    </article>
  );
};

// email: mesero@burger.com
// password: 123456


export default Login;