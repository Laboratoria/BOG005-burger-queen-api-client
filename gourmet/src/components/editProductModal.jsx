import React, { useState, useEffect } from 'react';
import { Modal } from './modal.jsx';
import { obtainImgURL } from '../utils/petitions.js';

// Modal para editar los productos
function EditProductModal({ product, setProduct, onSubmit, ...props }) { 
  
  function nameProductHandler(event) {
    setProduct((prevState) => ({...prevState, name: event.target.value}))
  }
  
  function priceProductHandler(event) {
    setProduct((prevState) => ({...prevState, price: event.target.value}))
  }
  
  function typeMenuHandler(event) {
    setProduct((prevState) => ({...prevState, type: event.target.value}))
  }
  
  async function onChangeImg(event , setImgProduct) {
    const uploadedImg = await event.target.files[0]
    const fr = new FileReader()
    fr.readAsDataURL(uploadedImg)
    fr.onload = () => setImgProduct(fr.result)
    return uploadedImg
  }
  
  const imgProdctHandler = async (event) => {
    const urlUpload = await onChangeImg(event, setImgProduct)
    console.log('urlUpload', urlUpload)
    const urlImage = await obtainImgURL(urlUpload)
    setImgProduct(
      urlImage
      )
    setProduct((prevState) => ({...prevState, urlImage: event.target.value}))
  }


return ( // Formulario para adicionar productos
  <Modal {...props} title='' className="addProdSection">
    {/* //...props, desestructurando los props de addProductModal */}
    <section className="addProModal">
      <h2 className="titleAddProduct">
        Editar Producto
      </h2>

      <form className='addProductForm' onSubmit={(event) => onSubmit(event, product.name, product.price, product.type, product.urlImage, product.id)} >
        <input
          className="addProductInput"
          type='text'
          placeholder="Nombre de producto"
          name="nameProduct"
          onChange={nameProductHandler}
          value={product.name}
        />

        <input
          className="addProductInput"
          type='text'
          placeholder="Precio del Producto"
          name="priceProduct"
          onChange={priceProductHandler}
          value={product.price}
        />

        <input
          className="addProductInput"
          type='text'
          placeholder="Tipo de Menú"
          name="typeMenu"
          onChange={typeMenuHandler}
          value={product.type}
        />
        <label className="addProductLabel">
          + Agregar Imagen
          <input
            type='file'
            placeholder="Imagen del producto"
            name="imgProduct"
            onChange={imgProdctHandler}
            className="addProductImage"
            value={product.urlImage}
          />
        </label>
        <button type="submit" className="addProdModalBtn">
          Editar Producto
        </button>

      </form>
    </section>

  </Modal>
)
}

export { EditProductModal }