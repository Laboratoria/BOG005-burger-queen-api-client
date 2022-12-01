import logo from "../img/LOGO LOGO.png";
// import loggo from "../img/FONDO-TABLET.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";
import React,{useEffect} from "react";


export function Login(email,password) {

    const [user, setUser] = React.useState(null);

    useEffect(() => {
      Data();
    }, []);
    const Data = async () => {
      const data = await fetch("http://localhost:8080/login");
      const users = await data.json();
      console.log("esta es mi data", users);
    };
  
  return (           
     
    
    <main>

      <div className="login">
        <img src={logo} alt="logo" className="logo_imagen" />
        {/* <img src={loggo} alt="logo" className="loggo_imagen" /> */}
        <section className="container_form">
          <Form className="login_form"                                   
          onSubmit = {ev => {
            ev.preventDefault();
            const email=ev.target.email.value;
             const password = ev.target.password.value;
             login(email,password);
             
          } 
        }
          >

            <h1 className="login_title">Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" name ="email" placeholder="Correo electrónico" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" name="password" placeholder="Contraseña" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </section>
      </div>
    </main>


  );
  
}
const login = (email,password)=>{
  if (email==="lore@gmail.com"&&password=== "123456") {
    console.log("tu correo o contraseña  son correctos",email,password)
    
  }else{
    alert("tu correo o contraseña no  son correctos");
  }
}


