import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './routes/Login.js'
import Order from './routes/Order';
import { Products } from './routes/Products';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/order' element={<Order />} />
          <Route path='/products' element={<Products />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
