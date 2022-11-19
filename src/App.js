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
import Order from './routes/Order';
import { Products } from './routes/Products';
import Administration from './routes/Administration';
import OrderState from './routes/OrderState';
import { Users } from './routes/Users';
// import OrderDupilicated from './routes/OrderDuplicated';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/order' element={<Order />} />
          <Route path='/products' element={<Products />} />
          <Route path='/admin' element={<Administration />} />
          <Route path='/orderState' element={<OrderState />} />
          <Route path='/users' element={<Users />} />
          {/* <Route path='/orderDuplicated' element={<OrderDupilicated />} /> */}


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
