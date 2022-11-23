import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { deleteProduct, editProduct } from '../helpers/axios'
import Button from './Button'
import FormInput from './FormInput'
import Modal from './Modal'

export const CardListProducts = ({ product, setListProductsTotal }) => {

    const [openModal, setOpenModal] = useState(false)
    const [productUpdate, setProductUpdate] = useState({ dateEntry: new Date(), image: product.image, name: product.name, price: product.price, type: "", id: product.id });

    const handleDelete = async () => {
        Swal.fire({
            title: 'Está seguro de que desea eliminar éste producto?',
            text: "No podrá recuperar el producto eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'sí, eliminar producto!'
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log("eliminando producto", product.id)
                deleteProduct(product, product.id).then((resDelete) => {
                    // console.log(resDelete)
                    if (resDelete.status === 200) {
                        // alert('Producto eliminado')
                        Swal.fire(
                            'Exito!',
                            'El producto se eliminó correctamente!',
                            'success'
                        )
                        setListProductsTotal((lista) => lista.filter(p => p.id !== product.id))
                    } else {
                        // alert('No se elimino el producto')
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo ocurrió y no se pudo crear el producto!'
                        })
                    }
                })
            }
        })
    }

    const handleEdit = () => {
        setOpenModal(true)
    }

    const handleChange = (e) => {
        console.log('me estoy ejecutando')
        setProductUpdate({
            ...productUpdate,
            [e.target.name]: e.target.value
        })
    }

    const closeModal = () => {
        setOpenModal(false)
    }

    const updateProductNow = async () => {
        const res = await editProduct(productUpdate, product.id)
        console.log(res)
        if (res.status === 200) {
            alert('Producto editado')
            setListProductsTotal((lista) => lista.map(p => {
                return (p.id === product.id) ? productUpdate : p
            }))
        } else {
            alert('No se edito el producto')
        }
        closeModal()
    }

    return (
        <>
            <div className='productsContainer'>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>${product.price}</p>
                <p>{product.type}</p>
            </div>
            <div className='btnContainerProducts'>
                <Button className='btnEditAdmonProduct' text='Edit' onClick={handleEdit} />
                <Modal
                    isOpen={openModal}
                    closeModal={closeModal}
                >
                    <p>Editar producto</p>
                    <FormInput
                        className="inputCargarImagen"
                        type='url'
                        name='image'
                        required
                        placeholder='cargar imagen'
                        value={productUpdate.image}
                        onChange={handleChange}
                    >
                    </FormInput>
                    <FormInput
                        className="inputNombreProducto"
                        type='nameNewProduct'
                        name='name'
                        required
                        placeholder='Nombre del nuevo producto'
                        value={productUpdate.name}
                        onChange={handleChange}
                    >
                    </FormInput>
                    <FormInput
                        className="inputPrecio"
                        type='string'
                        name='price'
                        required
                        placeholder='Precio del nuevo producto'
                        value={productUpdate.price}
                        onChange={handleChange}
                    >
                    </FormInput>
                    <select name='type' onChange={handleChange} className="SelectTypeProduct">
                        <option value='seleccion tipo' >Selecciona tipo</option>
                        <option value='Desayuno' selected={product.type === 'Desayuno'}>Desayuno</option>
                        <option value='Almuerzo' selected={product.type === 'Almuerzo'}>Almuerzo</option>
                    </select>
                    <div className='optionsModal'>
                        <Button onClick={updateProductNow} text="Aceptar" className="btnEditAdmonProduct" />
                        <Button onClick={closeModal} text="Cancelar" className="btnEditDeleteProduct" />
                    </div>

                </Modal>
                <Button className='btnEditDeleteProduct' text='Elim' onClick={handleDelete} />
            </div>
        </>
    )

}
