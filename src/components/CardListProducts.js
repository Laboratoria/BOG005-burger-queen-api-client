import React from 'react'
import { deleteProduct } from '../helpers/axios'
import Button from './Button'

export const CardListProducts = (product) => {
    
    console.log(product)

    const mitoken = localStorage.getItem('tokenUser')

    //console.log(product)

    const handleDelete = async() => {
        console.log("eliminando producto", product.id)
        const resDelete = await deleteProduct(mitoken, product, product.id )
        console.log(resDelete)
        if(resDelete.status === 200){
            alert('Producto eliminado')
        }else{
            alert('No se elimino el producto')
        }
        
    }

    const handleEdit = () => {
        console.log('editando')
    }

    return (
        <div className='productsContainer'>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>{product.type}</p>
            <Button text='Editar' onClick={handleEdit} />
            <Button text='Eliminar'  onClick={handleDelete} />
        </div>
    )

}
