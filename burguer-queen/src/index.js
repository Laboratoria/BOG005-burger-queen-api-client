import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import { Home } from "./Routes/Home";
import { Users } from "./Routes/Users";
// import MyForm, { Login } from "./Routes/Login";
import { Layout } from "./Layout";
import App from "./Routes/Home";
import MyForm from "./Routes/Login";

//import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<App/>} />
        <Route path="users" element={<Users />} />
        {/* <Route path="Login" element={<Login />} /> */}
        <Route path="Login" element={<MyForm/>} />
        {/* <Route path="*" element={<div>404 - not found</div>} /> */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>  
    
  </BrowserRouter>
  
);
