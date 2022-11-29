import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate();

  return (
    <div>
      <h1>SOY LA VISTA ADMIN</h1>
      <button onClick={() => navigate("/Login")}>REGRESAR</button>
    </div>
  );
}

export default Admin;