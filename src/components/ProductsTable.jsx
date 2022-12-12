import React from "react";
import ButtonInclusive from "./Button";

function ProductsTable ({ product, clickAdd }) {
  return (
    <div className="listProductsContainer">
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <ButtonInclusive text="Agregar" className="btnAdd" onClick={() => clickAdd(product)} />
    </div>
  )
}

export default ProductsTable