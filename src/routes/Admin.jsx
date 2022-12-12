import "./styles/Admin.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Header from "../components/Header";

const Admin = () => {
    const navigate = useNavigate();

  return (
    <div className="adminView">
      <Header />
      <h1>SOY LA VISTA ADMIN</h1>
      <button onClick={() => navigate("/Login")}>REGRESAR</button>
    </div>
  );
}

export default Admin;