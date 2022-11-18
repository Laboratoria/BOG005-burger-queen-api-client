import React from 'react'
import Button from './Button'

const ListProducts = (props) => {


    return (
        <div className='listProductsContainer'>
            <img src={props.image} alt={props.name} />
            <p>{props.name}</p>
            <p>${props.price}</p>
            <Button text='agregar' className='btnAdd' onClick={()=>props.clickAdd(props)}/>
        </div>
    )
}

export default ListProducts