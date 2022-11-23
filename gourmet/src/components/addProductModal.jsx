import React, { useState } from 'react';
import { Modal } from './modal.jsx';

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

  function imgProdctHandler(event) {
    const fr = new FileReader()
    fr.readAsDataURL(event.target.files[0])
    fr.onload = function (carga) {
      const url = carga.currentTarget.result
      setImgProduct({
        ...imgProduct,
        image: url
      })

    }
    // setImgProduct(event.target.value)

  }

  return ( // Formulario para adicionar productos
    <Modal {...props} title='' className="addProdSection">

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
              accept="image/png, image/jpg, image/gif, image/jpeg"
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