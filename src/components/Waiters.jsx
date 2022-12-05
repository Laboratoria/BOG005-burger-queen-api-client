import "./Waiters.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { products } from "./products";

const product = [ {
    id: 1,
    name: "Café Americano",
    price: 5,
    image:"../img/cafeamericano.jpeg",
    type: "Desayuno",
  },
  {
    id: 2,
    name: "Café con leche",
    price: 7,
    image: "https://ibb.co/HXnKndy",
    type: "Desayuno",
  },
  {
    id: 3,
    name: "Sandwich de jamón y queso",
    price: 10,
    image:"../img/sandwich.jpeg",
    type: "Desayuno",
  },
  {
    id: 4,
    name: "Hamburguesa simple",
    price: 10,
    image:"../img/burger.png",
    type: "Almuerzo",
  },]


const Waiters = () => {
    const navigate = useNavigate();

  return (
    <section className="waiterOrders">
        <div className='linkWaiter'>
            <Link className="linkOrders" to="/Waiters">Pedidos</Link>  {" "}
            <Link className="linkStatus" to="/login">Estado</Link>
        </div>
            <div className="pedidos">
                <h3 className="takeOrders">Tomando pedidos</h3>
                <h4 className="orderNum">Nº de orden</h4>
                <input className="orderNumber" type="number"></input>
                <div className="buttonProducts">
                    <p>{products(product[1])}</p> 
                </div>
            <div className="buttonsWaiter">
        <button className="hola" onClick={() => navigate("/Login")}>REGRESAR</button>
        <button className="hola" onClick={() => alert('Producto cargado')}>CONFIRMAR</button>
        </div>
        </div>
    </section>
  );
}

export default Waiters;
