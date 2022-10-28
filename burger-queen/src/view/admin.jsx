import React from "react";
import logoFondoPizarra from '../img/logoSinFondo.png'
import AdminUser from "../components/adminUser";


const Admin= () => {
    return (
        <div className="AdminUser_container">
            <header>
            <img src={logoFondoPizarra} alt="logo" />
            <nav>

            </nav>
            </header>
            <p>
                página en construcción 
            </p>
            <AdminUser />
        </div>
    )
}

export default Admin