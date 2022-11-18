import React, { useContext } from "react";
// import CartContext from "../../context/cartContext";

export const ItemCart = ({ props }) => {
    console.log(props)
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
//   const { addItemToCart, restItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
//   const { amount, price } = item;

  return (
    <div className="cartItem">
      <img src={props.image} alt={props.name} />
      <div className="dataContainer">
        <div className="left">
          <p>{props.name}</p>
          {/* <div className="buttons">
            <button onClick={() => addItemToCart(item)}>
              +
            </button>
            <button onClick={() => restItemToCart(item)}>
              -
            </button>
          </div> */}
        </div>
        {/* <div className="right">
          <div>{amount}</div>
          <p>Total: ${amount * price}</p>
        </div> */}
      </div>
    </div>
  );
};