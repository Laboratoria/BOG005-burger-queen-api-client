import "./App.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { postUser } from "../petitions/userPetition";

const Login = () => {

  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const handleChangeEmail = (event) => {
    setUserEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setUserPassword(event.target.value)
  }

  const userAuth = (event) => {
    event.preventDefault()

    console.log(userEmail);
    console.log(userPassword);

    postUser(userEmail, userPassword)
      .then((response) => {
        console.log(response)

        const errorMessage = document.getElementById("errorMessage")
        errorMessage.innerHTML = "";

        if (response.status === 200){
          navigate('/Admin')
          alert('Bienvenida, Grace')
        }
        // if (response.post.user.role === "mesero") {
        // console.log('Tienes acceso', 35)
        // navigate('/');
        // }
      })
      .catch((error) => {
        console.log(error)
        if (error.response.data === "Incorrect password" ) {
          alert('Por favor verifica tu contraseña')
          //errorMessage.innerHTML = 'Contraseña incorrecta';
        }
        else {
          alert('Usuario no encontrado')
          // errorMessage.innerHTML = 'Usuario no encontrado';
        }
      })
  } 

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
        <p id="errorMessage"></p>
        <div className='buttons-container'>
        <button className='btn-start' onClick={() => navigate("/")}>REGRESAR</button> 
        <button className='btn-return'onClick={ userAuth }>INGRESAR</button>
        </div>
      </div>
    </form>
  );
};

// email: mesero@burger.com
// password: 123456

export default Login;
