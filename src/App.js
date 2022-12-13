import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  breakfast, login, lounch, order, orderDelivered } from "./routes/routes";
import "./App.css";
import {Order} from "./components/Order";
import { Login } from "./components/Login.jsx";
import {OrderDelivered} from "./components/OrderDelivered.jsx";
import { Breakfast } from "./components/Breakfast";
import { Lounch } from "./components/Lounch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={login} element={<Login />} />
          <Route path={order} element={<Order/>} />
          <Route path={orderDelivered} element={<OrderDelivered />} />
          <Route path={breakfast} element={<Breakfast />} />
          <Route path={lounch} element={<Lounch /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
