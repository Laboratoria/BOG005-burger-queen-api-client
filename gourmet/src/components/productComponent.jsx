import React from 'react';
    
    // Componente de cada uno de los productos 
    function ProductComponent (props) {
        return(
            <article className="containProduct">
                <img className="productImage" srcSet={props.image} alt={props.name} />
                <div className="productText">
                    <p className="productType">{props.type}</p>
                    <p>{props.name} <span className="productPrice">${props.price}</span></p>
                </div>
                <div>
                    <i className="fa-solid fa-pencil"></i>
                    <i className="fa-solid fa-trash"></i>
                </div>
            </article>
        )
    }


export { ProductComponent }