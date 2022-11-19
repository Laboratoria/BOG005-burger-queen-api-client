import React, { useState } from 'react'
import Button from './Button'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardProductsOrder = ( {productSelect, setOrderList, orderList}) => {

    
    const [productSelectQuantity, setProductSelectQuantity]=useState(1)

    function addQuantityProduct () {
        setProductSelectQuantity(productSelectQuantity+1)
        }
    
    function subtractQuantityProduct () {
        setProductSelectQuantity(productSelectQuantity-1)
        }

    // function clickAdd (props) {
    //     console.log(props)
    //     console.log("estoy agregando productos")
    //     setProductSelect(props)
    // }
    const productDelete = () => {
        console.log(productSelect.id)
        console.log(orderList)
        const newArr = orderList.filter((item) => item.id !== productSelect.id);
        setOrderList(newArr);
      }
    
  return (
    <div className='containerProductOrder'>
        <div className='name'>
                            <p>{productSelect.name}</p>
                        </div>
                        <div className='price'>
                            <p>${productSelect.price*productSelectQuantity}</p>
                        </div>
                        <div className='btnQuantity'>
                            <Button text='–' className='btnFewer' onClick={()=>subtractQuantityProduct()}/>
                            <p className='pControl'>{productSelectQuantity}</p>
                            <Button text='+' className='btnAdd' onClick={()=>addQuantityProduct()}/>
                        </div>
                        <div className='btnDelete'>
                            <Button className='trashContainer' onClick={productDelete}><FontAwesomeIcon icon={faTrash} /></Button>
                        </div>
    </div>
  )
}

export default CardProductsOrder