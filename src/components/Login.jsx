import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useForm } from 'react-hook-form';

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
    <form onClick={handleSubmit} className='login'>
      <div className='form-container'>
        <select name="rol">
          <option value="Rol" autoFocus>Rol</option>
          <option value="Administración">Administración</option>
          <option value="Mesas">Mesas</option>
          <option value="Cocina">Cocina</option>
        </select>
        <input
          type='email'
          placeholder='Correo'
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
        <div className='buttons-container'>
        <button className='btn-start' onClick={() => navigate("/")}>VOLVER</button>  
        <button className='btn-return' onClick={() => navigate("/Admin")}>INGRESAR</button>
        </div>
      </div>
    </form>
  );
};

// email: mesero
// password: 123456

export default Login;
