
import React, {useEffect } from "react";
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

    return (
        <div className="login_container">
           <h1> estados de las ordenes</h1>
             {listOrders.map(data => (<OrderItem key={data.id} id={data.id} client={data.client} dataEntry={data.dataEntry} products={data.products} status={data.status} userId={data.userId}/>))}
        </div>
    )
}

export {StateOrder}