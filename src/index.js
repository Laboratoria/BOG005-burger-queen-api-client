import React from "react";
import ReactDOM from "react-dom";

// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./routes/login";
import { Pedido } from "./routes/pedido";
import { Productos } from "./routes/productos";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Login/>} />
      <Route path="/productos" element ={<Productos/>} />
      <Route path="/pedido" element ={<Pedido/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom"
import { Login } from './routes/login'
import { Productos } from './routes/productos';
import { Pedido } from './routes/pedido';


ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element= {<Login />}/>
    <Route path='/productos' element= {<Productos />}/>
    <Route path='/pedido' element= {<Pedido/>}/>
    <Route path='*' element= {<Navigate replace to='/' /> }/>
  </Routes>
  </BrowserRouter>, document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
