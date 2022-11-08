import React from "react";
import logoFondoPizarra from '../img/logoSinFondo.png'
import {AdminUser} from '../components/admin/adminUser/adminUser.jsx'
import { Navbar } from "../components/navBar.jsx";


// import Navbar from "../components/navBar";
// import Navbar from "../components/navBar";




const Admin= () => {
    return (
        <div className="admin_Container">
            <header>
            <img src={logoFondoPizarra} alt="logo" />
            <nav>
            <i className="fa-solid fa-bars"></i>
            </nav>
            {/* <Navbar
                item1="USUARIOS"
                item2="PRODUCTOS"
                link1="/admin"
                link2="/admin-products"
            /> */}
            <Navbar/>
            </header>
            <AdminUser />
        </div>
    )
}

export  {Admin}