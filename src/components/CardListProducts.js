import React from 'react'
import Button from './Button'

export const CardListProducts = (props) => {

    return (
        <div className='productsContainer'>
            <img src={props.image} alt={props.name} />
            <p>{props.name}</p>
            <p>${props.price}</p>
            <p>{props.type}</p>
            <Button text='Editar' />
            <Button text='Eliminar' />
        </div>
    )

}
