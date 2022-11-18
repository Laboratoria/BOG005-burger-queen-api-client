import React from 'react'
import { CartContext } from '../../context/cartContext';
import { ItemCart } from './itemCart';


const Cart  = () => {
    const { order,
        setOrder
    } = React.useContext(CartContext);
    
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
              <h3>Total: $ </h3>
            </div>
            <div className='container_button'>
              <div>
                <button
                className='cancelar'
                >Cancelar pedido</button>
              </div>
              <div>
                <button type= 'submit'
                className='enviar' 
                >Enviar Pedido</button>
              </div>
            </div>
        </section>
      </div>
    </>
  )
}
export {Cart}