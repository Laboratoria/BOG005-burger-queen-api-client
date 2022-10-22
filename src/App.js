// import logo from './logo.svg';
import logo from './resources/logo-bq.png';
import './App.css';

function App() {
  return (
    <section className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <form typeof='submit' className='formLogin'>
        <input className='userName'></input>
        <input className='passWordUser'></input>
        <button className='btnLogin'>Ingresar</button>
      </form>
    </section>
  );
}

export default App;
