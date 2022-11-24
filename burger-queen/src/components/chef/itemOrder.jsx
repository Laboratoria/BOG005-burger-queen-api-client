import React from "react";
import { BurgerContext } from "../../context/indexContext";
import { ItemProductOrder } from "./itemProductOrder";

const ItemOrder = (props) => {
    const {
        listOrders,
        setListOrders,
    } = React.useContext(BurgerContext);


    let lista = listOrders.filter(product=> product.status === "pending")

    console.log("TRAES", lista)

    let totalProduct = props.products.map(data =>data.qty *data.product.price )
    console.log('mirando este total', totalProduct);
    let totalOrder = totalProduct.reduce(function(a, b){ return a + b; });
    console.log('totales', totalOrder);

    return(
        <div>
            <div className="userItem_Container">
            <p className="client">{props.client}</p>
            <p className="status">{props.status}</p>
            <p className="dataEntry">{props.dataEntry}</p>
            <p className="totalOrder">Total: ${totalOrder}</p>
            
            </div>
            <div className="details">
            {props.products.map(data => (<ItemProductOrder key={data.id} qty={data.qty} name={data.product.name} price={data.product.price}/>))}
            </div>
        </div>
    
    )
}
export {ItemOrder}