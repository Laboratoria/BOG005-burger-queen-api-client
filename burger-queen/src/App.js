// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './view/home.jsx'
import Login from './view/login.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
