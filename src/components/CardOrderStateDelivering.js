import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from './Button';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { changeOrderToDelivered } from '../helpers/axios';

const CardOrderStateDelivering = ({order}) => {
  console.log(order.id)
// console.log(order.products[0].product.name)
console.log(order.dataEntry)

const arrayForOrder = order.products.map((product) => {
    // console.log(product.product.name)
    return product.product.name;
    
})

const sendToDelivered=  async () => {
 await changeOrderToDelivered(order.id)
 console.log("me estoy cambiando a delivered")
  // changeOrderToDelivering(orderListPending.id)
}


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
        <Button><FontAwesomeIcon icon={faCheck} onClick={sendToDelivered}/></Button>
        </div>
    </div>
    </>

    
  );
};

export default CardOrderStateDelivering