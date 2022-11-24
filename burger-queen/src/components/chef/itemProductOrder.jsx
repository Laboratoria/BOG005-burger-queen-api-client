import React from "react";

const ItemProductOrder = (props) => {

let totalAcum= props.qty * props.price
    return (
        <div className="orderProductItem">
            <p>{props.name}  cant: {props.qty} total: {totalAcum} </p>
        </div>
    )
}

export {ItemProductOrder}