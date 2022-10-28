import React from "react";
import logoFondoPizarra from '../img/logoSinFondo.png'
import AdminUser from "../components/adminUser";


const Admin= () => {
    return (
        <div className="admin_Container">
            <header>
            <img src={logoFondoPizarra} alt="logo" />
            <nav>
            <i class="fa-solid fa-bars"></i>
            </nav>
            </header>
            <AdminUser />
        </div>
    )
}

export default Admin