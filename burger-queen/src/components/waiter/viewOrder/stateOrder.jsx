
import React, {useEffect } from "react";
import { useState } from "react";
import { BurgerContext } from "../../../context/indexContext";
import { listOrder } from "../../../petitions/productPetition";
import { OrderItem } from "./orderItems";

const StateOrder = () => {

    const { 
        listOrders,
        setListOrders,
      } = React.useContext(BurgerContext);


    const getListOrders = () => {
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
            console.log('listOrders',listOrders);
        })
    }

    useEffect(() => { getListOrders() } , [])

    const [orderFilter, setOrderFilter] = useState([])
    const [editStatus ,setEditStatus] = useState(false)

    const viewPending =()=>{
        setOrderFilter(listOrders.filter(order=> order.status === 'pending'))
        console.log('filtrado',orderFilter);   
    }

    const viewToDeliver =()=>{
        // setOrderFilter(listOrders.filter(order=> order.status === 'pending'))
        console.log('pendiente este estado');  
        setEditStatus(true)
    }
    const viewToDelivered =()=>{
        setOrderFilter(listOrders.filter(order=> order.status === 'delivered'))
        console.log('filtrado',orderFilter);   
    }

    return (
        <div className="login_container">
           <h1> estados de las ordenes</h1>
           <div className="btnsStates">
           <button className="btnStatePending" onClick={viewPending}>Pendientes</button>
           <button className="btnStateToDeliver" onClick={viewToDeliver}>Por Entregar</button>
           <button className="btnStateDelivered" onClick={viewToDelivered}>Entregados</button>
           </div>
             {orderFilter.map(data => (<OrderItem key={data.id} id={data.id} client={data.client} dataEntry={data.dataEntry} products={data.products} status={data.status} userId={data.userId} editStatus={editStatus}/>))}
        </div>
    )
}

export {StateOrder}