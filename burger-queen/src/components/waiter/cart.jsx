import React from 'react'
import { CartContext } from '../../context/cartContext';
import { BurgerContext } from '../../context/indexContext';
import { PostOrder } from '../../petitions/productPetition';
import { ItemCart } from './itemCart';




const Cart  = () => {
    const { order,
        // setOrder,
        totalOrder,
        setTotalOrder,
        amountProduct,
        setAmountProduct
    } = React.useContext(CartContext);

    const { 
      openModal,
      setOpenModal,
  } = React.useContext(BurgerContext);

   const cancelOrder =()=>{
    setOpenModal(false)
   }

   const sendOrder =()=>{
    setOpenModal(false)
    console.log('productos de la orden', order)
    console.log('cantidad de productos',amountProduct)
       }

  return (
    <>
      <div className='container'>
        <h2 className='title'>Tomar Pedido</h2>
        <section className='section'>
            <div>      
              <label>Nombre del Cliente</label>
              <input 
                id = 'orderClient'
                type='text'
                name='client'
                className='client'                      
              ></input> 
              {/* {order.map(data => console.log("QUE TRAES",data.name))} */}
                {order.map(data => (<ItemCart key={data.id} id={data.id} image={data.image} name={data.name} price={data.price} type={data.type}/>))}
              <h3>Total: $ {totalOrder}</h3>
            </div>
            <div className='container_button'>
              <div>
                <button
                className='cancelOrder'
                onClick={cancelOrder}>Cancelar pedido</button>
              </div>
              <div>
                <button type= 'submit'
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
export {Cart}