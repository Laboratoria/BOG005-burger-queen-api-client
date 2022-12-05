import "./Waiters.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
                    <button>Café americano</button>
                    <button>Café con leche</button>
                    <button>Sandwich de jamón y queso</button>
                    <button>Jugo de frutas natural</button>
                    <button>Hamburguesa simple</button>
                    <button>Hamburguesa doble</button>
                    <button>Papas fritas</button>
                    <button>Aros de cebolla</button>
                    <button>Agua 500ml</button>
                    <button>Agua 750ml</button>
                    <button>Bebida/gaseosa 500ml</button>
                    <button>Bebida/gaseosa 750ml</button>
                </div>
            <div className="buttonsWaiter">
        <button className="hola" onClick={() => navigate("/Login")}>REGRESAR</button>
        <button className="hola" onClick={() => navigate("/")}>CONFIRMAR</button>
        </div>
        </div>
    </section>
  );
}

export default Waiters;
