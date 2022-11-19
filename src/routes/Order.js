import React, { useEffect } from 'react'
import Header from '../components/Header'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import { useState } from 'react';
import { getProducts } from '../helpers/axios'
// import { useForm } from 'react-hook-form'
import ListProducts from '../components/ListProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import CardProductsOrder from '../components/CardProductsOrder';


const Order = () => {

    const [productsOptions, setProductsOptions] = useState([])
    // const [selectState, setSelectState] = useState({ value: 'Seleccione Desayuno/Almuerzo' })
    const [productsList, setProductsList] = useState([])

    // let orderList = []

    const [orderList, setOrderList] = useState([])

    const [productSelect, setProductSelect] = useState({})



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
                // console.log({ image: product.image, name: product.name, price: product.price })
                return true
                // mostrar los almuerzos
            }
            return false
        })

        setProductsList(resultFilter)
        console.log(resultFilter)
    }

    // const clickAdd = (props) => {
    //     console.log("estoy agregando productos")
    //     setProductSelect(props)
    // }

    // Funcion para agregar productos al pedido

    const addProductOrder = (props) => {
        console.log(props)
        //setProductSelect(props)
        //orderList.push(props)
        // setListProductsTotal((lista) => lista.map(p => {
        //     return (p.id === product.id) ? productUpdate : p
        // }))
        setProductSelect([...orderList, orderList.push(props)])
        console.log(orderList)
    }

    const totalPrice = orderList.map((product) => product.price).reduce((sum,val) => sum + parseInt(val,0),0)

    
    // const priceTotal = orderList.reduce((price1, price2) => price1.price + price2.price , 0)

    return (
        <section className='order'>
            <Header />
            {/* <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" /> */}
            <Button className='btnStateOrder' text='Estado Pedidos'><FontAwesomeIcon className='iconArrow' icon={faCircleArrowRight} /></Button>
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
                                        id={product.id}
                                        image={product.image}
                                        name={product.name}
                                        price={product.price} 
                                        dataEntry={new Date()}
                                        clickAdd= {addProductOrder}>
                                        </ListProducts>
                                </div>)
                        })
                    }
                </div>
                {/* <form typeof='submit' className='formOrder' onSubmit={handleSubmit(selectOption)}> */}

                {/* seccion de manejar cantidad de los pedidos */}
                <form typeof='submit' className='formOrder' >
                    <p className='pOrderSummary'>Resumen del pedido</p>
                    <FormInput
                        className='inputNameClient'
                        type='nameClient'
                        required
                        placeholder='Nombre del cliente'>
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
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
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
                        <Button text='Enviar' className='btnEnviar'></Button>
                        <Button text='Cancelar' className='btnCancel'></Button>
                    </section>

                </form>
            </section>
        </section>
    )
}

export default Order