import React, {useEffect, useState } from "react";
import { BurgerContext } from "../../context/indexContext";
import { listOrder } from "../../petitions/productPetition";
import { ItemOrder } from "./itemOrder";


const OrderState = () => {

    const { 
        listOrders,
        setListOrders,
      // eslint-disable-next-line react-hooks/rules-of-hooks
      } = React.useContext(BurgerContext);


    const getListOrder = () => {
        listOrder().then(res => {
            console.log('res.data',res.data);
             setListOrders(res.data.map((order) => {
                return {
                    client: order.client,
                    id: order.id,
                    dataEntry: order.dataEntry,
                    products: order.products,
                    status: order.status,
                    userId: order.userId,
                }}))
            console.log('listOrders',listOrder);
        })
    }

    useEffect(() => {getListOrder()} , [])

    const [orderFilter, setOrderFilter] = useState([])

    const viewPending =()=>{
        setOrderFilter(listOrders.filter(order=> order.status === 'pending'))
        console.log('filtrado',orderFilter);   
    }

    const viewReady =()=>{
        setOrderFilter(listOrders.filter(order=> order.status === 'ready' || order.status === 'delivered' ))
        console.log('filtrado',orderFilter);   
    }

    return (
        <div className="login_container">
           <h1> estados de las ordenes</h1>
           <div className="btnsStates">
           <button className="btnStatePending" onClick={viewPending}>Pendientes</button>
           <button className="btnStateDelivered btnStateReady" onClick={viewReady}>Entregados</button>
           </div>
             {orderFilter.map(data => (<ItemOrder key={data.id} id={data.id} client={data.client} dataEntry={data.dataEntry} products={data.products} status={data.status} userId={data.userId}/>))}
        </div>
    )
}

export {OrderState}