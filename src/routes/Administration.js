// import React, { useEffect } from 'react'
import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Administration = () => {

    const navegate = useNavigate()

    return (
        <div className='App'>
            <div className='containerBtnAdmin'>

                <Button
                    className='btnAdmin'
                onClick={()=>{navegate('/users')}}
                >
                    <FontAwesomeIcon className='iconUsers' icon={faUsers} />
                    Administración de personal
                </Button>

                <Button
                    className='btnAdmin'
                    onClick={()=>{navegate('/products')}}
                >
                    <FontAwesomeIcon className='iconUsers' icon={faUsers} />
                    Administración de productos
                </Button>

                <Button
                    className='btnAdmin'
                onClick={()=>{navegate('/orderState')}}
                >
                    <FontAwesomeIcon className='iconUsers' icon={faUsers} />
                    Administración de pedidos
                </Button>
            </div>
        </div>
    )
}

export default Administration