import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Start from "./components/Home";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Waiters from "./components/Waiters";
  
function App() {
    
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Start/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Admin" element={<Admin/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}
  
export default App;