 import React from "react";
 import { useNavigate } from "react-router-dom";
 import { useState } from "react";
//  import axios from 'axios';
import logo from "../img/logo.png"

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

     return (
      <article className="principal-login">
      <img src={logo} alt="logotipo"/>       
       <form onClick={handleSubmit} className='login'>
      <div className='form-container'>
        <h1 className="tittle-login">LOGIN</h1>
        <input
          type='email'
          placeholder='Correo Electrónico'
          name='username'
          value={inputs.username || ""}
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Contraseña'
          name='pass'
          value={inputs.pass || ""}
          onChange={handleChange}
        />
        <div className='button-container-login'>
          <button className='btn-login' onClick={() => navigate("/Orders")}>INGRESAR</button>
        </div>
      </div>
    </form>
     </article>
    )
 }

 export default Login;