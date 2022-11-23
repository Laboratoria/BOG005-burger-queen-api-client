import React from "react";



const OrderProductItem = (props) => {
    // const {
    //     listOrders,
    //     setListOrders,
    // } = React.useContext(BurgerContext); 
//    let cantidad = props.products.map(data=> data.qty)
   console.log('probando props',props);
let total= props.qty * props.price
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.qty}</p>
            <p>{total}</p>
        </div>
    )
}

export {OrderProductItem}