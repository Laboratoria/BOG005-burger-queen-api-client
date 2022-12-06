import React from "react";

// // Componentes para los productos
// const ProductTable = (product) => {
//     return (
//         <article className="productsContainer">
//             {/* <img className="imageProduct" srcSet={product.image} alt={product.name} /> */}
//             <div className="infoProduct">
//                 <p>{product.id}</p>
//                 <p>{product.name}</p>
//                 <p>{product.price}</p>
//                 <img srcSet={product.image} alt={product.name}></img>
//                 <p>{product.type}</p>
//             </div>
//         </article>
//     )
// }

// export { products }


const ProductTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Producto</th>
        <th>Precio</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
    {props.products.length > 0 ? (
        props.products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
            <button className="button muted-button">Add</button>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No hay productos</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ProductTable
