import React from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Orders from "../Componentes/Orders";
import SeeTheOrders from "../Componentes/SeeTheOrders";
import '../style/styleorden.css'
import '../style/styleSeeTheOrdersl.css'


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/Orders" element={<Orders />} />
                    <Route exact path="/VerOrden" element={<SeeTheOrders/>} />
                    <Route exact path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;