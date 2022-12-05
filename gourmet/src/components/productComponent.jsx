import React from 'react';
import { eraseProduct } from '../utils/petitions.js';

// Componente de cada uno de los productos 
function ProductComponent(props) {
    return (
        <article className="containProduct">
            <img className="productImage" srcSet={props.image} alt={props.name} />
            <div className="productText">
                <p className="productType">{props.type}</p>
                <p>{props.name} <span className="productPrice">${props.price}</span></p>
            </div>
            <div>
                <i onClick={() => props.onClick(props.id)} className="fa-solid fa-pencil"></i>
                <i onClick={eraseProduct} className="fa-solid fa-trash"></i>
            </div>
        </article>
    )
}


export { ProductComponent }