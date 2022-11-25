import logo from '../resources/logo-bq.png';
import TittleBQ from './TittleBQ';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const emailUserHeader = localStorage.getItem('userEmail')
  const roleUserHeader = localStorage.getItem('userRole')

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <section className='headerContainer'>
      <img src={logo} className="App-logo" alt="logo" />
      <TittleBQ />
      <p>{emailUserHeader} / {roleUserHeader}</p>
      <Button
        className='btnStyle'
        type='button'
        onClick={logOut} >
      </Button>

    </section>
  );
}

export default Header;