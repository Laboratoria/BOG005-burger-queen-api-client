
import React from "react";



const MenuItem= (props) => {
 
    return (
        <div className="menuItem">
            <img src={props.image} alt={props.name} className='imgProduct' />
            <p className="product">{props.name}</p>
            <p className="price">{props.price}</p>
        </div>
    )
}

export {MenuItem}