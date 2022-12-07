import React from 'react';

// Componente de cada uno de los productos 
function ProductComponent(props) {
    return (
        <article className="containProduct">
            <div className="productDetails">
                <img className="productImage" srcSet={props.image} alt={props.name} />
                <div className="productText">
                    <p className="productType">{props.type}</p>
                    <p>{props.name} <span className="productPrice">${props.price}</span></p>
                </div>
            </div>
            <div className='iconContainer'>
                <i onClick={() => props.handleEdit(props.id)} className="fa-solid fa-pencil"></i>
                <i onClick={() => props.handleDelete(props.id)} className="fa-solid fa-trash"></i>
            </div>
        </article>
    )
}

export { ProductComponent }