import React from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import Admin from "../Componentes/Admin";
import Login from "../Componentes/Login";
import Orders from "../Componentes/Orders";




const Router = () => {
    return (
        <>
        <BrowserRouter>
            
            <Routes>
                <Route exact path="/" element={<Login />}/>
                <Route exact path="/Orders" element={<Orders />}/>
                <Route exact path="/Admin" element={<Admin />}/>
                <Route exact path="*" element={<Navigate replace to="/" />}/>
                
            </Routes>
           
        </BrowserRouter>
        </>
    )
}

export default Router;