import React from 'react'

const CardOrderStateDelivered = ({order}) => {

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
        <div className="divCheck"></div>
      </div>
    </>
  );
};

export default CardOrderStateDelivered