//import { renderMatches } from "react-router-dom";
import logop from "../img/logop.svg";


export function Home() {
  return <h1>Home</h1>;
}

function Start() {
  alert("You clicked me!");
}

export default function App() {
  return (
    <div className="landing">
       <img src={logop} alt='logo'/>
        <div>
            <button className='btn' onClick={Start}>INICIA</button>
        </div>
      
    </div>
  );
}
