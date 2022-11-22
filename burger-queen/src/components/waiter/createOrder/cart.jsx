import React from 'react'
import { CartContext } from '../../../context/cartContext';
import { BurgerContext } from '../../../context/indexContext';
import { getOnlyProduct, postOrder, PostOrder } from '../../../petitions/productPetition';
import { ItemCart } from './itemCart';




const Cart = () => {
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

  const cancelOrder = () => {
    setOpenModal(false)
  }

  //  {
  //   "qty": 2,
  //   "product": {
  //     "id": 2,
  //     "name": "Café americano",
  //     "price": 500,
  //     "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg",
  //     "type": "Desayuno",
  //     "dateEntry": "2022-03-05 15:14:10"
  //   }
  // },

  // const sendOrder = async () => {
  //   let products =[]
  //   setOpenModal(false)

  //   await order.forEach(product => {
  //     const acum = amountProduct.filter(element => element === product.id)
  //     const oneProduct = order.filter(element => element.id === product.id)
  //     products.push({ qty: acum.length, product: oneProduct[0] });
  //     let idWaiter = JSON.parse(sessionStorage.getItem('user')).user.id
  //     const orderPetitionObj = {
  //       userId: idWaiter,
  //       client: 'andres',
  //       products: products,
  //       status: 'pending',
  //       dateEntry: new Date().toLocaleString('sv'),
  //       totalPrice: totalOrder,
  //     };
  //     // console.log('superObjeto', products);
  //     if (products.length === order.length) {
  //       postOrder(orderPetitionObj)
  //         .then(() => {
  //           console.log('Orden creada con éxito');
  //         })
  //         .catch((error) => {
  //           console.log('Error de Orden', error);
  //         });
  //     }
  //   })
  // }
  const creatObject =()=>{
    let arrayItems = [];
    console.log('arrayItems vacio',arrayItems)
     order.forEach((product)=>{
      const acum = amountProduct.filter(element => element === product.id)
      // const oneProduct = order.filter(element => element.id === product.id)
        arrayItems.push(
          {
            "qty": acum.length,
            "product": {
              "id": product.id,
              "name": product.name,
              "price":product.price,
              "image": product.image,
              "type":product.type,
              "dateEntry": product.dateEntry,
            }
          }
        )
      })
      console.log('arrayItems',arrayItems);
      return arrayItems;
    }
  

  const sendOrder =() => {
    let idWaiter = JSON.parse(sessionStorage.getItem('user')).user.id
    let newObject = creatObject();
    
    postOrder(newObject, idWaiter, 'andres' )
          .then((res) => {
            console.log('Orden creada con éxito', res);
            newObject = '';
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
            ></input>
            {/* {order.map(data => console.log("QUE TRAES",data.name))} */}
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