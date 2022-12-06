import React, { useState, useEffect } from 'react';
import { Modal } from './modal.jsx';
import { obtainImgURL } from '../utils/petitions.js';

// Modal para editar los productos
function EditProductModal(props) {
  const [nameProduct, setNameProduct] = useState('');
  const [priceProduct, setPriceProduct] = useState('');
  const [typeMenu, setTypeMenu] = useState('');
  const [imgProduct, setImgProduct] = useState('');
  console.log('props.product', props.product)

  useEffect((() => {
    if(props.product){
      setNameProduct(props.product.name)
      setPriceProduct(props.product.price)
      setTypeMenu(props.product.type)
      setImgProduct(props.product.urlImage)
    }
  }), [])
  
  function nameProductHandler(event) {
    setNameProduct(event.target.value)
  }

  function priceProductHandler(event) {
    setPriceProduct(event.target.value)
  }

  function typeMenuHandler(event) {
    setTypeMenu(event.target.value)
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
  }


return ( // Formulario para adicionar productos
  <Modal {...props} title='' className="addProdSection">
    {/* //...props, desestructurando los props de addProductModal */}
    <section className="addProModal">
      <h2 className="titleAddProduct">
        Editar Producto
      </h2>

      <form className='addProductForm' onSubmit={(event) => props.onSubmit(event, nameProduct, priceProduct, typeMenu, imgProduct, props.product.id)} >
        <input
          className="addProductInput"
          type='text'
          placeholder="Nombre de producto"
          name="nameProduct"
          onChange={nameProductHandler}
          value={nameProduct}
        />

        <input
          className="addProductInput"
          type='text'
          placeholder="Precio del Producto"
          name="priceProduct"
          onChange={priceProductHandler}
          value={priceProduct}
        />

        <input
          className="addProductInput"
          type='text'
          placeholder="Tipo de Menú"
          name="typeMenu"
          onChange={typeMenuHandler}
          value={typeMenu}
        />
        <label className="addProductLabel">
          + Agregar Imagen
          <input
            type='file'
            placeholder="Imagen del producto"
            name="imgProduct"
            onChange={imgProdctHandler}
            className="addProductImage"
            value={imgProduct}
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