import React, { useEffect } from 'react'
import Header from '../components/Header'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import { useState } from 'react';
import { getProducts } from '../helpers/axios'
// import { useForm } from 'react-hook-form'
import ListProducts from '../components/ListProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
//import menu from '../helpers/menu'

//console.log('este es el menu', menu())

const Order = () => {

    const [productsOptions, setProductsOptions] = useState([])
    // const [selectState, setSelectState] = useState({ value: 'Seleccione Desayuno/Almuerzo' })
    const [productsList, setProductsList] = useState([])

    //const { handleSubmit } = useForm()

    const mitoken = localStorage.getItem('tokenUser')

    useEffect(() => {
        const getProductsOption = async () => {
            const result = await getProducts(mitoken)
            // console.log(result)
            setProductsOptions(result)
        }

        getProductsOption()
    }, [mitoken])

    // console.log(productsOptions)



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
                        productsList.map((product, index) => {
                            return (
                                <div key={index} className='listProductsOrder'>
                                    <ListProducts
                                        image={product.image}
                                        name={product.name}
                                        price={product.price} />
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
                        <p>Cantidad</p>
                        <p>Opciones</p>
                    </section>

                    {/* informacion de los productos */}
                    <section className='containerPCO'>
                        <div className='name'>
                            <p>nombre</p>
                        </div>
                        <div className='btnQuantity'>
                            <Button text='–' className='btnFewer' />
                            <p className='pControl'>0</p>
                            <Button text='+' className='btnAdd' />
                        </div>
                        <div className='btnDelete'>
                            <Button className='trashContainer'><FontAwesomeIcon icon={faTrash} /></Button>
                        </div>
                    </section>

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