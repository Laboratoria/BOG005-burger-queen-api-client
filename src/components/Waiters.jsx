import { useNavigate } from "react-router-dom";

const Waiters = () => {
    const navigate = useNavigate();

  return (
    <div>
      <h1>SOY LA VISTA MESEROS</h1>
      <button onClick={() => navigate("/Login")}>REGRESAR</button>
    </div>
  );
}

export default Waiters;
