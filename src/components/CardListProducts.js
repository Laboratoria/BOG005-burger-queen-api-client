import React from 'react'
import Swal from 'sweetalert2'
import { deleteProduct } from '../helpers/axios'
import Button from './Button'

export const CardListProducts = (product) => {

    // console.log(product)

    const mitoken = localStorage.getItem('tokenUser')

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
                deleteProduct(mitoken, product, product.id).then((resDelete) => {
                    // console.log(resDelete)
                    if (resDelete.status === 200) {
                        // alert('Producto eliminado')
                        Swal.fire(
                            'Exito!',
                            'El producto se eliminó correctamente!',
                            'success'
                        )
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
        console.log('editando')
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
                <Button className='btnEditDeleteProduct' text='Elim' onClick={handleDelete} />
            </div>
        </>
    )

}
