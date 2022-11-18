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

// "products": [
// {
//     "qty": 1,
//     "product": {
//       "id": 1,
//       "name": "Sandwich de jamón y queso",
//       "price": 1000,
//       "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
//       "type": "Desayuno",
//       "dateEntry": "2022-03-05 15:14:10"
//     }
//   }
// ]

const Order = () => {

    const [productsOptions, setProductsOptions] = useState([])
    // const [selectState, setSelectState] = useState({ value: 'Seleccione Desayuno/Almuerzo' })
    const [productsList, setProductsList] = useState([])

    const [productSelect, setProductSelect] = useState({})

    const [orderList, setOrderList] = useState([])

    const [productSelectQuantity, setProductSelectQuantity]=useState(1)


    useEffect(() => {
        const getProductsOption = async () => {
            const result = await getProducts()
            // console.log(result)
            setProductsOptions(result)
        }

        getProductsOption()
    }, [])

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

    // Funcion para agregar productos al pedido

    const addProductOrder = () => {
        
    }

    function clickAdd (props) {
        console.log(props)
        console.log("estoy agrgando productos")
        setProductSelect(props)
    }

   function addQuantityProduct () {
    setProductSelectQuantity(productSelectQuantity+1)
    }

    function subtractQuantityProduct () {
        setProductSelectQuantity(productSelectQuantity-1)
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
                                        price={product.price} 
                                        clickAdd= {clickAdd}>
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

                    {/* informacion de los productos */}
                    <section className='containerPCO'>
                        <div className='name'>
                            <p>{productSelect.name}</p>
                        </div>
                        <div className='price'>
                            <p>${productSelect.price}</p>
                        </div>
                        <div className='btnQuantity'>
                            <Button text='–' className='btnFewer' onClick={()=>subtractQuantityProduct()}/>
                            <p className='pControl'>{productSelectQuantity}</p>
                            <Button text='+' className='btnAdd' onClick={()=>addQuantityProduct()}/>
                        </div>
                        <div className='btnDelete'>
                            <Button className='trashContainer'><FontAwesomeIcon icon={faTrash} /></Button>
                        </div>
                    </section>
                    <div className='totalPrice'>
                            <p>Total</p>
                            <p>${productSelect.price}</p>
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