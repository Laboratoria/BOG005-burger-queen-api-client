import React from 'react'

const OrderList = (props, children) => {
  return (
    <div>
        <p>{props.name}</p>
        <p>${props.price}</p>
        {children}
    </div>
  )
}

export default OrderList