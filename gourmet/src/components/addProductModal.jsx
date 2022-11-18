import React from 'react';
import { Modal } from './modal.jsx';

function AddProductModal(props) {

  return (
    <Modal {...props} title='' className="addProdSection">
      
      <section className="addProModal">
      <h2 className="titleAddProduct">
        Crear Producto
      </h2>

      <form className='addProductForm' >
        <input
          className="addProductInput"
          type='text'
          placeholder="Nombre de producto"
          name="nameProduct"
        />

        <input
          className="addProductInput"
          type='text'
          placeholder="Precio del Producto"
          name="priceProduct"
        />

        <input
          className="addProductInput"
          type='text'
          placeholder="Tipo de Menú"
          name="typeMenu"
        />
        <input
          className="addProductInput"
          type='text'
          placeholder="Imagen del producto"
          name="imgProduct"
        />
        <button type="submit" className="addProdBtn">
          Agregar Producto
        </button>

      </form>
      </section>

    </Modal>
  )
}

export { AddProductModal }