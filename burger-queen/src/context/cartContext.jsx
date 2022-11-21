import React, {useState} from 'react';
const CartContext = React.createContext();

function CartProvider(props) {
const [order, setOrder] = useState([])
const [amountProduct, setAmountProduct] = useState([])
const [totalOrder, setTotalOrder] = useState(0)
// ({
//   id: '',
//   amount: 0,
// })
    return (
        <CartContext.Provider value={{
            order,
            setOrder,
            amountProduct,
            setAmountProduct,
            totalOrder,
            setTotalOrder
            
        }}>
          {props.children}
        </CartContext.Provider>
      );
    }
    
    export {CartContext, CartProvider };