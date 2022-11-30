import { useNavigate } from "react-router-dom";
import "./App.css";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className='landing'>
      <button onClick={() => navigate("/Login")}>INGRESAR</button>
    </div>
  );
};

export default Start;
