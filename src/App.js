import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Start from "./routes/Home";
import Login from "./routes/Login";
import Admin from "./routes/Admin";
import Waiters from "./routes/Waiters";
  
function App() {
    
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Start/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Admin" element={<Admin/>}/>
        <Route exact path="/Waiters" element={<Waiters/>}/>
      </Routes>
      </BrowserRouter>
  );
}
  
export default App;