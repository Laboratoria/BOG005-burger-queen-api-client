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
