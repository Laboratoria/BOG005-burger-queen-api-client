import logo from '../resources/logo-bq.png';
import TittleBQ from './TittleBQ';
//import Login from '../routes/Login';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
//import { FaArrowCircleRight } from "react-icons/fa";

const Header = () => {

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <section className='headerContainer'>
      <img src={logo} className="App-logo" alt="logo" />
      <TittleBQ />
      <Button
        className='btnStyle'
        type='button'
        onClick={logOut} >
      </Button>

    </section>
  );
}

export default Header;