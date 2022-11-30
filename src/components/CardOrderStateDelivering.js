import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from './Button';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { changeOrderToDelivered } from '../helpers/axios';

const CardOrderStateDelivering = ({order}) => {

const sendToDelivered=  async () => {
 await changeOrderToDelivered(order.id)
}

  return (
    <>
      <div className="greyCont">
        <div className="divNameSend">
          <h3>{order.client}</h3>
          <p>Id mesero:{order.userId}</p>
          {order.products.map((product, id) => {
            return (
              <div key={id} className="divProductStateOrder">
                <p>{product.product.name}</p>
                <p>{product.qty}</p>
              </div>
            );
          })}
        </div>
        <div className="divTime">
          <p>{order.dataEntry}</p>
        </div>
        <div className="divCheck">
          <Button>
            <FontAwesomeIcon icon={faCheck} onClick={sendToDelivered} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default CardOrderStateDelivering