import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './routes/Login.js'
import Order from './routes/Order';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/order' element={<Order />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
