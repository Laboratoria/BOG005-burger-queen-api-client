import logo from '../resources/logo-bq.png';
import TittleBQ from './TittleBQ';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

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
        onClick={logOut}
      >
        <FontAwesomeIcon className='iconSignOut' icon={faRightFromBracket} />
      </Button>

    </section>
  );
}

export default Header;