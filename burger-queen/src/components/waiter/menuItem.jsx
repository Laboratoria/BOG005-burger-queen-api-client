
import React from "react";
import { getOnlyProduct } from "../../petitions/productPetition";
import { CartContext } from "../../context/cartContext";


const MenuItem = (props) => {
    const { order,
        setOrder,
        amountProduct,
        setAmountProduct
    } = React.useContext(CartContext);

    // let productsOrder = []

    const addProduct = () => {
        console.log('click aqui', props.id);
        getOnlyProduct(props.id).then(res => {
            // console.log('mirando res', res.data)
            // productsOrder.push(res.data)
            // console.log('array',productsOrder)
            // setOrder(productsOrder)
            // console.log('estado order', order);
            const productExists = order.find((item)=> item.id === props.id) //me devuelve un unico elemento
            if(productExists){

               setAmountProduct(
                {
                    ...amountProduct,
                    id: res.data.id,
                    amount: + 1
                  }
               ) 
            }
            else (
                setOrder([
                    ...order, res.data
                ])
            )
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
