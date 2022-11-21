
import React from "react";
import { getOnlyProduct } from "../../petitions/productPetition";
import { CartContext } from "../../context/cartContext";


const MenuItem = (props) => {
    const { order,
        setOrder,
        amountProduct,
        setAmountProduct,
            totalOrder,
            setTotalOrder,
    } = React.useContext(CartContext);

    // let productsOrder = []

    const addProduct = () => {
        getOnlyProduct(props.id).then(res => {
            const productExists = order.find((item)=> item.id === props.id) //me devuelve un unico elemento
            if(productExists){
               setAmountProduct(
                [  ...amountProduct,  res.data.id,
                ])
            }
            else (
                setOrder([
                    ...order, res.data
                ])
            )
            setTotalOrder(parseInt(totalOrder) + parseInt(props.price))
        })
    }

return (
    <div className="menuItem" onClick={addProduct}>
        <img src={props.image} alt={props.name} className='imgProduct' />
        <h3 className="product">{props.name}</h3>
        <h3 className="price">{props.price}</h3>
    </div>
)
}

export { MenuItem }
