import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CardOrderState from '../components/CardOrderState';
import { viewOrderPending } from '../helpers/axios';
import { useNavigate } from 'react-router-dom';
import CardOrderStateDelivering from '../components/CardOrderStateDelivering';
import CardOrderStateDelivered from '../components/CardOrderStateDelivered';

const OrderState = () => {
    
    const navegate = useNavigate()

    const [orderListPending, setorderListPending] = useState([])

    useEffect(() => {
        if (orderListPending.length === 0) {
            const viewListOrderPending = async () => {
                const res = await viewOrderPending()
                setorderListPending(res)
            }
            viewListOrderPending()
        }
    }, [orderListPending])

    const orderStatusPending = orderListPending.filter((order) => {
        return order.status === 'pending' && order
    })

    const orderStatusDelivering = orderListPending.filter((order) => {
        return order.status === 'delivering' && order
    })

    const orderStatusDelivered = orderListPending.filter((order) => {
        return order.status === 'delivered' && order
    })


    return (
        <section >
            <Header />
            <section className='containerOrderState'>
                <div className='containerBtnP'>
                    <Button className='btnOrderRow'
                        onClick={() => { navegate('/order') }}>
                        <FontAwesomeIcon className='iconArrowOrderState' icon={faCircleArrowLeft} />Realizar Pedido
                    </Button>
                    <p>Estado de los Pedidos</p>
                </div>

                <div className='pContainerOrderState'>
                    <div ><p>Enviados</p></div>
                    <div ><p>Servidos</p></div>
                    <div ><p>Entregados</p></div>
                </div>

                <div className='containerGridOrderState'>
                    <div className='pOrderState'>
                        {orderStatusPending.map((order, id) => {
                            return (
                                <div key={id}>
                                    <CardOrderState
                                        order={order}>
                                    </CardOrderState>
                                </div>
                            )
                        })}
                    </div>

                    <div className='pOrderState'>
                        {orderStatusDelivering.map((order, id) => {
                            return (
                                <div key={id}>
                                    <CardOrderStateDelivering
                                        order={order}
                                    />
                                </div>
                            )
                        })}
                    </div>

                    <div className='pOrderState'>
                        {orderStatusDelivered.map((order, id) => {
                            return (
                                <div key={id}>
                                    <CardOrderStateDelivered
                                        order={order}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>

            </section>

        </section>

    )
}

export default OrderState