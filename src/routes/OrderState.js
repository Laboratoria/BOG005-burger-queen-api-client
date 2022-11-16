import React from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const OrderState = () => {
    return (
        <section >
            <Header />
            <section className='containerOrderState'>
                <div className='containerBtnP'>
                    <Button className='btnOrderRow'>
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
                        <div className='greyCont'>
                            <div className='divNameSend'>
                                <h3>Adriana Ruiz</h3>
                                <p>Enviado por: Ibeht Carreño</p>
                            </div>
                            <div className='divTime'>
                                <p>10:00</p>
                            </div>
                        </div>
                        <div className='greyCont'>
                            <div className='divNameSend'>
                                <h3>Adriana Ruiz</h3>
                                <p>Enviado por: Ibeht Carreño</p>
                            </div>
                            <div className='divTime'>
                                <p>10:00</p>
                            </div>
                        </div>
                    </div>

                    <div className='pOrderState'>
                        <div className='greyCont'>
                            <div className='divNameSend'>
                                <h3>Adriana Ruiz</h3>
                                <p>Servido por: Ibeht Carreño</p>
                            </div>
                            <div className='divTime'>
                                <p>10:40</p>
                            </div>
                            <div className='divCheck'>
                                <Button><FontAwesomeIcon icon={faCheck} /></Button>
                            </div>
                        </div>
                    </div>

                    <div className='pOrderState'>
                        <div className='greyCont'>
                            <div className='divNameAttended'>
                                <h3>Adriana Ruiz</h3>
                                <p>Atendido por: Ibeht Carreño</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </section>

    )
}

export default OrderState