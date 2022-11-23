import React from "react";
import { Navbar } from "../components/header/navBar";
import { Modal } from "../components/modal/modal";
import { BurgerContext } from "../context/indexContext";
import { Cart } from "../components/waiter/createOrder/cart";
import { ProductsWaiter } from "../components/waiter/createOrder/waiterProducts";
import { ViewCartDesktop } from "../components/waiter/createOrder/cartdesktop";
import { StateOrder } from "../components/waiter/viewOrder/stateOrder";




const Waiter= () => {
    const { 
        openModal,
        // setOpenModal,
        stateWaiter,
    } = React.useContext(BurgerContext);

    // const viewCart = ()=>{
    //     setOpenModal(true)
    // }
    return (
        <div className="waiter_container" >
             <Navbar />
            <div className="viewOrder">
            { stateWaiter ?  
            <React.Fragment>
                <ProductsWaiter/>
            {/* <button className= "fa-solid fa-cart-shopping btnCart" onClick={viewCart}></button> */}
            {!!openModal && (
                    <Modal>
                        <Cart/>
                    </Modal>
                )}
            <ViewCartDesktop/>
            </React.Fragment>
            : <StateOrder /> }
            </div>
        </div>
    )
}

export {Waiter}