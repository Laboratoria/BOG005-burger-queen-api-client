import React, { useEffect } from 'react'
import Header from '../components/Header'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import { useState } from 'react';
import { getProducts, orderPetition } from '../helpers/axios'
// import { useForm } from 'react-hook-form'
import ListProducts from '../components/ListProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import CardProductsOrder from '../components/CardProductsOrder';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const Order = () => {

    const navegate = useNavigate()

    const [productsOptions, setProductsOptions] = useState([])
    const [productsList, setProductsList] = useState([])
    const [orderList, setOrderList] = useState([])
    const [nameClient, setNameClient] = useState('')
    // const [productInOrder, setProductInOrder] = useState(false)

    useEffect(() => {
        const getProductsOption = async () => {
            const result = await getProducts()
            // console.log(result)
            setProductsOptions(result)
        }

        getProductsOption()
    }, [orderList])

    const selectOption = (e) => {

        const resultFilter = productsOptions.filter((product) => {
            if (e.target.value === product.type) {
                // console.log(product.name)
                console.log(product)
                return true
                // mostrar los almuerzos
            }
            return false
        })
        setProductsList(resultFilter)
        console.log(resultFilter) //productList queda con la seleccion de la lista de desayuno o almuerzo
    }

    // Funcion para agregar productos al pedido
    const addProductOrder = (props) => {
        console.log(props.id)
    
        let productInOrder = orderList.map((product) => product.product.id).includes(props.id)
        
        if(productInOrder){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Producto ya agregado a la orden!'
            })
        } else {
            setOrderList([...orderList, { qty: 1, product: props }])
        }
        console.log(orderList)
    }

    const totalPrice = orderList.map((product) => product.product.price * product.qty).reduce((sum, val) => sum + val, 0)

    const handleChange = (e) => {
        // console.log('me estoy ejecutando')
        setNameClient(e.target.value)
        // console.log(nameClient)
    }

    const sendOrderPetition = async (e) => {
        e.preventDefault()
        try {
            const res = await orderPetition(orderList, nameClient)
            if (res === 201) {
                navegate('/orderState')
                console.log("si se esta creando la orden")
            }
        } catch {
            alert('no se creo la orden')
        }
    }

    return (
        <section className='order'>
            <Header />
            <Button
                className='btnStateOrder'
                onClick={() => { navegate('/orderState') }}
                text='Estado Pedidos'
            >

                <FontAwesomeIcon className='iconArrow' icon={faCircleArrowRight} />
            </Button>
            <div className='containerH1'>
                <h1>Realizar Pedido</h1>
            </div>
            <section className='mainlist'>
                <div className='optionsListContainer'>
                    <select className='optionMenu' onChange={selectOption}>
                        <option value='Seleccione Desayuno/Almuerzo'>Seleccione una opción</option>
                        <option value='Desayuno'>Desayuno</option>
                        <option value='Almuerzo'>Almuerzo</option>
                    </select>
                    {
                        productsList.map((product, id) => {
                            return (
                                <div key={id} className='listProductsOrder'>
                                    <ListProducts
                                        product={product}
                                        dataEntry={new Date()}
                                        clickAdd={() => addProductOrder(product)}>
                                    </ListProducts>
                                </div>)
                        })
                    }
                </div>
                {/* <form typeof='submit' className='formOrder' onSubmit={handleSubmit(selectOption)}> */}

                {/* seccion de manejar cantidad de los pedidos */}
                <form typeof='submit' className='formOrder' onSubmit={sendOrderPetition} >
                    <p className='pOrderSummary'>Resumen del pedido</p>
                    <FormInput
                        className='inputNameClient'
                        value={nameClient}
                        required
                        placeholder='Nombre del cliente'
                        onChange={handleChange}>
                    </FormInput>
                    <section className='containerLabels'>
                        <p>Producto</p>
                        <p>Precio</p>
                        <p>Cantidad</p>
                        <p>Opciones</p>
                    </section>

                    {/* informacion de los productos ordenados */}
                    <div className='containerProductsAdmin'>
                        {orderList.map((product, id) => (
                            <div key={id}>
                                <CardProductsOrder
                                    productSelect={product}
                                    orderList={orderList}
                                    setOrderList={setOrderList}
                                />
                            </div>
                        ))}
                    </div>

                    <div className='totalPrice'>
                        <p>Total</p>
                        <p>${totalPrice}</p>
                    </div>
                    <section className='sectionBtn'>
                        <Button text='Enviar' className='btnEnviar' ></Button>
                        <Button text='Cancelar' className='btnCancel'></Button>
                    </section>

                </form>
            </section>
        </section>
    )
}

export default Order