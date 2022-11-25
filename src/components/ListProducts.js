import React from 'react'
import Button from './Button'

const ListProducts = ({ product, clickAdd }) => {


    return (
        <div className='listProductsContainer'>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <Button text='agregar' className='btnAdd' onClick={() => clickAdd(product)} />
        </div>
    )
}

export default ListProducts