
import React from "react";



const MenuItem= (props) => {

    const addProduct = ()=>{
        console.log('click aqui', props.id);
    }
 
    return (
        <div className="menuItem" onClick={addProduct}>
            <img src={props.image} alt={props.name} className='imgProduct' />
            <h3 className="product">{props.name}</h3>
            <h3 className="price">{props.price}</h3>
        </div>
    )
}

export {MenuItem}