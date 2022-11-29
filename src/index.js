import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from'./components/App'
import MyForm from './components/login';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MyForm />
    {/* <Button text="Ingresar"/>
    <Button text="Volver"/> */}
  </React.StrictMode>
  
);
