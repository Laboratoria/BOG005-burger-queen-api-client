import './App.css';

function Start(){
  alert('You clicked me!')
}

export default function App() {
  return (
    <div className='landing'>
      <button onClick={ Start }>
      INGRESAR
      </button>
    </div>
  );
}