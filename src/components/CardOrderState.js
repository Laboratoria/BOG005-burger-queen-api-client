import React from 'react'
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CardOrderState = ({order}) => {
// console.log(order.products[0].product.name)
console.log(order.dataEntry)

const arrayForOrder = order.products.map((product) => {
    // console.log(product.product.name)
    return product.product.name;
    
})

// const timer = order.dataEntry.getTime()
// console.log(timer)

console.log(arrayForOrder)
    
  return (
    <>
    <div className="greyCont">
      <div className="divNameSend">
        <h3>{order.client}</h3>
        <p>Id mesero:{order.userId}</p>
        {
          order.products.map((product, id) => {
        return(
          <div key={id} className='divProductStateOrder'>
            <p>{product.product.name}</p>
            <p>{product.qty}</p>
          </div>
          )
        })
        }
       
      </div>
      <div className="divTime">
      <p>{order.dataEntry}</p>
      </div>
      <div className='divCheck'>
          <Button><FontAwesomeIcon icon={faCheck} /></Button>
        </div>
    </div>
    </>

    
  );
};

export default CardOrderState