import React from 'react';
    
    // Componente de cada uno de los productos 
    function ProductComponent (props) {
        return(
            <article className="containProduct">
                <img className="productImage" srcSet={props.image} alt={props.name} />
                <div>
                    <p>{props.type}</p>
                    <p>{props.name} <span>{props.price}</span></p>
                </div>
                <div>
                    <i className="fa-solid fa-pencil"></i>
                    <i className="fa-solid fa-trash-can-xmark"></i>
                </div>
            </article>
        )
    }


export { ProductComponent }