import React from "react";

// Componentes para los productos
const products = (product) => {
    return (
        <article className="productsContainer">
            <img className="imageProduct" srcSet={product.image} alt={product.name} />
            <div className="infoProduct">
            </div>
        </article>
    )
}

export { products }