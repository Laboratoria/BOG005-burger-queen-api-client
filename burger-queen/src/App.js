// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './view/home.jsx'
import Login from './view/login.jsx';
import Admin from './view/admin.jsx'; 
// import { Waiter } from './view/waiter.jsx';
// import { Chef } from './view/chef.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Login' element={<Login />}/>
        <Route path='/admin' element={<Admin />}/>
        {/* <Route path='/waiter' element={<Waiter />}/>
        <Route path='/chef' element={<Chef />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
