import React from "react";
import { CartContext } from "../../context/cartContext";
  const ItemCart =(props) => {

    const {
      amountProduct,
      // setAmountProduct
  } = React.useContext(CartContext);

    console.log('dentro de item cart',props.id)
    let acum;
    console.log('viendo stado' , amountProduct);

    if(props.id === amountProduct.id){
      acum += amountProduct.amount
    }
 
  return (
    <div className="cartItem">
    
      <img src={props.image} alt={props.name} />
      <div className="dataContainer">
        <div className="left">
          <p>{props.name}</p>
          {/* <p>{props.price}</p> */}
          <div className="buttons">
            <button >
              +
            </button>
            <p>amount {acum}</p>
            <button >
              -
            </button>
          </div>
        </div>
        {/* <div className="right">
          <div>{amount}</div>
          <p>Total: ${amount * price}</p>
        </div> */}
      </div>
    </div>
  );
};

export {ItemCart}