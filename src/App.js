import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './styleComponents/Login.css';
import './styleComponents/Header.css';
import './styleComponents/Order.css';
import './styleComponents/OrderListProduct.css';
import './styleComponents/ProductsCardListProducts.css';
import './styleComponents/Administration.css';
import './styleComponents/OrderState.css';
import './styleComponents/Modal.css';
import './styleComponents/Users.css';

import './App.css';

import Login from './routes/Login.js'
import RoutesByRole from './routes/RoutesByRole';


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/*' element={<RoutesByRole />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
