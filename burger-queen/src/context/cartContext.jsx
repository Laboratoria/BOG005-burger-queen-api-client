import React, {useState} from 'react';
const CartContext = React.createContext();

function CartProvider(props) {
const [order, setOrder] = useState([])
    return (
        <CartContext.Provider value={{
            order,
            setOrder
        }}>
          {props.children}
        </CartContext.Provider>
      );
    }
    
    export {CartContext, CartProvider };