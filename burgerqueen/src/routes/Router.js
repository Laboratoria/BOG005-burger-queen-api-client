import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Products from "../Componentes/Products";
import SeeTheOrders from "../Componentes/SeeTheOrders";
import Admin from "../Componentes/Admin";
import Login from "../Componentes/Login";
import Orders from "../Componentes/Orders";


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route exact path="/" element={<Login />}/>
                <Route exact path="/Admin" element={<Admin />}/>
                    <Route exact path="/Products" element={<Products/>} />
                    <Route exact path="/VerOrden" element={<SeeTheOrders/>} />
                    <Route exact path="/orders" element={<Orders/>} />
                    <Route exact path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;