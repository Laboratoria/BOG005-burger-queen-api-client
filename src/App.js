import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  login, order, orderDelivered } from "./routes/routes";
import "./App.css";
import { Login } from "./components/Login.jsx";
import { Order } from "./components/Order.jsx";
import {OrderDelivered} from "./components/OrderDelivered.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={login} element={<Login />} />
          <Route path={order} element={<Order/>} />
          <Route path={orderDelivered} element={<OrderDelivered />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
