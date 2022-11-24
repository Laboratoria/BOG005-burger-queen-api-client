import React from "react";

const OrderProductChef = (props) => {

let total= props.qty * props.price
    return (
        <div >
            <p>{props.name}  cant: {props.qty} total: {total} </p>

        </div>
    )
}

export {OrderProductChef}