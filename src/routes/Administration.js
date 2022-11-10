// import React, { useEffect } from 'react'
import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';


const Administration = () => {

    // const navegate = useNavigate()

    // deberia meter el navigate en un useEffect es lo que dice en la consola
    //  si lo dejo asi se ejecuta infinito!!!!!

    // const navegateOrder = () => {
    //     navegate('/order')
    // }
    // navegate()



    return (
        <div className='App'>
            <div className='containerBtnAdmin'>

                <Button
                    className='btnAdmin'
                // onClick={navegateOrder}
                >
                    <FontAwesomeIcon className='iconUsers' icon={faUsers} />
                    Administración de personal
                </Button>

                <Button
                    className='btnAdmin'
                // onClick={}
                >
                    <FontAwesomeIcon className='iconUsers' icon={faUsers} />
                    Administración de productos
                </Button>

                <Button
                    className='btnAdmin'
                // onClick={}
                >
                    <FontAwesomeIcon className='iconUsers' icon={faUsers} />
                    Administración de pedidos
                </Button>
            </div>
        </div>
    )
}

export default Administration