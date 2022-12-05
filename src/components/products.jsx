import React from "react";

// Componentes para los productos
const products = (product) => {
    return (
        <article className="productsContainer">
            {/* <img className="imageProduct" srcSet={product.image} alt={product.name} /> */}
            <div className="infoProduct">
                <p>{product.id}</p>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <img srcSet={product.image} alt={product.name}></img>
                <p>{product.type}</p>
            </div>
        </article>
    )
}

export { products }
