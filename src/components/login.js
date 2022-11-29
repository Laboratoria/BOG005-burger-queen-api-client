import "./App.css";
import { useState } from "react";

function Button({text}) {
  return (
    <button>{text}</button>
  );
}

export default function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit} className="login">
      <div className="form-container">
        <input 
          type="email" 
          placeholder="Correo"
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
          <input 
            type="password" 
            placeholder="Contraseña"
            name="pass" 
            value={inputs.pass || ""} 
            onChange={handleChange}
          />
          <div className="buttons-container">
            <Button
            text="Ingresar"
            type="submit"
            className="btn-start" 
            />
            <Button 
            text="Volver"
            type="submit"
            className="btn-return" 
            />
          </div>
      </div>
        
    </form>
  )
}
