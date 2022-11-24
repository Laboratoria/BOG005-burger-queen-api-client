import React from 'react'
import { useState } from 'react';
import { CartContext } from '../../../context/cartContext';
import { BurgerContext } from '../../../context/indexContext';
import { getOnlyProduct, postOrder} from '../../../petitions/productPetition';
import { ItemCart } from './itemCart';




const Cart = () => {
  const { order,
    setOrder,
    totalOrder,
    setTotalOrder,
    amountProduct,
    setAmountProduct
  } = React.useContext(CartContext);

  const {
    openModal,
    setOpenModal,
  } = React.useContext(BurgerContext);

  const [clients, setClients] = useState('')

  const cancelOrder = () => {
    setOpenModal(false)
    setOrder([])
    setClients('')
    setTotalOrder(0)
    setAmountProduct([])
  }
  const creatObject = () => {
    let arrayItems = [];
    console.log('arrayItems vacio', arrayItems)
    order.forEach((product) => {
      const acum = amountProduct.filter(element => element === product.id)
      // const oneProduct = order.filter(element => element.id === product.id)
      arrayItems.push(
        {
          "qty": acum.length,
          "product": {
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "image": product.image,
            "type": product.type,
            "dateEntry": product.dateEntry,
          }
        }
      )
    })
    console.log('arrayItems', arrayItems);
    return arrayItems;
  }


  const sendOrder = () => {
    let idWaiter = JSON.parse(sessionStorage.getItem('user')).user.id
    let newObject = creatObject();
    console.log('mi cliente dentro de enviar', clients)
    postOrder(newObject, idWaiter, clients)
      .then((res) => {
        console.log('Orden creada con éxito', res);
        setOrder([])
        setClients('')
        setTotalOrder(0)
        setAmountProduct([])
      })
      .catch((error) => {
        console.log('Error de Orden', error);
      });
  }


  return (
    <>
      <div className='container'>
        <h2 className='title'>Tomar Pedido</h2>
        <section className='section'>
          <div>
            <label>Nombre del Cliente</label>
            <input
              id='orderClient'
              type='text'
              name='client'
              className='client'
              value={clients}
              onChange={event => setClients(event.target.value)}   
            ></input>
            {order.map(data => (<ItemCart key={data.id} id={data.id} image={data.image} name={data.name} price={data.price} type={data.type} />))}
            <h3>Total: $ {totalOrder}</h3>
          </div>
          <div className='container_button'>
            <div>
              <button
                className='cancelOrder'
                onClick={cancelOrder}>Cancelar pedido</button>
            </div>
            <div>
              <button type='submit'
                className='sendOrder'
                onClick={sendOrder}
              >Enviar Pedido</button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export { Cart }