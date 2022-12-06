import React, { useState } from 'react';
import { Modal } from './modal.jsx';
import { obtainImgURL } from '../utils/petitions.js';


// Modal para adicionar productos
function AddProductModal(props) {
  const [nameProduct, setNameProduct] = useState('')
  const [priceProduct, setPriceProduct] = useState('')
  const [typeMenu, setTypeMenu] = useState('')
  const [imgProduct, setImgProduct] = useState('')

  function nameProductHandler(event) {
    setNameProduct(event.target.value)
  }

  function priceProductHandler(event) {
    setPriceProduct(event.target.value)
  }

  function typeMenuHandler(event) {
    setTypeMenu(event.target.value)
  }

  // Consumiendo la petición de imágen para tomar la URL
 async function changeImgURL(event , setImgProduct) {
    const uploadedImg = await event.target.files[0]
        const fr = new FileReader()
        fr.readAsDataURL(uploadedImg)
        fr.onload = () => setImgProduct(fr.result)
        return uploadedImg
  }
  const imgProdctHandler = async (event) => {
    const urlUpload = await changeImgURL(event, setImgProduct)
    console.log('urlUpload', urlUpload)
    const urlImage = await obtainImgURL(urlUpload)
    console.log('urlUpload', urlImage)
    setImgProduct(
      urlImage
    )
  }


return ( // Formulario para adicionar productos
  <Modal {...props} title='' className="addProdSection">
    {/* //...props, desestructurando los props de addProductModal */}
    <section className="addProModal">
      <h2 className="titleAddProduct">
        Crear Producto
      </h2>

      <form className='addProductForm' onSubmit={(event) => props.onSubmit(event, nameProduct, priceProduct, typeMenu, imgProduct)} >
        <input
          className="addProductInput"
          type='text'
          placeholder="Nombre de producto"
          name="nameProduct"
          onChange={nameProductHandler}
        />

        <input
          className="addProductInput"
          type='text'
          placeholder="Precio del Producto"
          name="priceProduct"
          onChange={priceProductHandler}
        />

        <input
          className="addProductInput"
          type='text'
          placeholder="Tipo de Menú"
          name="typeMenu"
          onChange={typeMenuHandler}
        />
        <label className="addProductLabel">
          + Agregar Imagen
          <input
            type='file'
            placeholder="Imagen del producto"
            name="imgProduct"
            onChange={imgProdctHandler}
            className="addProductImage"
          />
        </label>
        <button type="submit" className="addProdModalBtn">
          Agregar Producto
        </button>

      </form>
    </section>

  </Modal>
)
}

export { AddProductModal }