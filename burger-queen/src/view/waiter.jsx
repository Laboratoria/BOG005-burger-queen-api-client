import React from "react";
import { Navbar } from "../components/header/navBar";
import { Cart } from "../components/waiter/cart";
import { ProductsWaiter } from "../components/waiter/waiterProducts";
import { Modal } from "../components/modal/modal";
import { BurgerContext } from "../context/indexContext";
import { ViewCartDesktop } from "../components/waiter/cartdesktop";




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