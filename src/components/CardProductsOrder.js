import React, { useEffect, useState } from 'react'
import Button from './Button'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardProductsOrder = ( {productSelect, setOrderList, orderList}) => {

    console.log(productSelect.product)
    

    function addQuantityProduct () {
      setOrderList((products) => {
        return products.map((product) => {
          if (product.product.id === productSelect.product.id) {
            product.qty ++
          } 
          return product
        })
      })
        }
    
    function subtractQuantityProduct () {
        setOrderList((products) => {
            return products.map((product) => {
              if (product.product.id === productSelect.product.id) {
                product.qty --
              } 
              return product
            })
          })
        }

    // function clickAdd (props) {
    //     console.log(props)
    //     console.log("estoy agregando productos")
    //     setProductSelect(props)
    // }
    const productDelete = () => {
        console.log(productSelect.product.id)
        console.log(orderList)
        const newArr = orderList.filter((item) => item.id !== productSelect.product.id);
        setOrderList(newArr);
      }

    // const totalPriceProduct = () => {
    //     setFinalPrice(productSelect.price*productSelectQuantity)
    // }

    const totalPriceProduct = productSelect.product.price*productSelect.qty

    
  return (
    <div className='containerProductOrder'>
        <div className='name'>
                            <p>{productSelect.product.name}</p>
                        </div>
                        <div className='price'>
                            <p>${totalPriceProduct}</p>
                        </div>
                        <div className='btnQuantity'>
                            <Button type="button" text='–' className='btnFewer' onClick={()=>subtractQuantityProduct()}/>
                            <p className='pControl'>{productSelect.qty}</p>
                            <Button type="button" text='+' className='btnAdd' onClick={()=>addQuantityProduct()}/>
                        </div>
                        <div className='btnDelete'>
                            <Button className='trashContainer' onClick={productDelete}><FontAwesomeIcon icon={faTrash} /></Button>
                        </div>
    </div>
  )
}

export default CardProductsOrder