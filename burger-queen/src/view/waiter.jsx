import React from "react";
import { Navbar } from "../components/header/navBar";
import { Modal } from "../components/modal/modal";
import { BurgerContext } from "../context/indexContext";
import { Cart } from "../components/waiter/createOrder/cart";
import { ProductsWaiter } from "../components/waiter/createOrder/waiterProducts";
import { ViewCartDesktop } from "../components/waiter/createOrder/cartdesktop";




const Waiter= () => {
    const { 
        openModal,
        setOpenModal,
    } = React.useContext(BurgerContext);

    const viewCart = ()=>{
        setOpenModal(true)
    }
    return (
        <div className="waiter_container" >
             <Navbar />
            <h1>vista de mesero en construcción</h1>
            <div className="viewOrder">
            <ProductsWaiter/>
            <button className="btnCart" onClick={viewCart}>carrito</button>
            {!!openModal && (
                    <Modal>
                        <Cart/>
                    </Modal>
                )}
            <ViewCartDesktop/>
            </div>
        </div>
    )
}

export {Waiter}