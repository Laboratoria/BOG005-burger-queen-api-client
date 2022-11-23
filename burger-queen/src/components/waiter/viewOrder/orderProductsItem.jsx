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
        <div className="orderProductItem">
            <p>{props.name}  cant: {props.qty} total: {total} </p>
            {/* <p> cant: {props.qty}</p>
            <p> total: {total}</p> */}
        </div>
    )
}

export {OrderProductItem}