import { useState } from "react";
import "../App.css";
import logop from "../img/logop.svg";

export function Login() {
    return (
    <h1>
      Login
    </h1>
    )
  }

function Button() {
    return (
      <button type='' className="btn">INGRESAR</button>
    );
  }

  export default function MyForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs((values) => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }
  
    return (
      <form onSubmit={handleSubmit} className="login">
        <img src={logop} alt='logo'/>
        <div className="form-container">
          <input 
            type="email" 
            placeholder="E-mail"
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
              type="submit"
              className="btn-start"
              text="INGRESAR" 
              />
             
            </div>
        </div>
          
      </form>
    )
  }