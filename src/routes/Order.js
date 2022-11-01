import React, { useEffect } from 'react'
import Header from '../components/Header'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import { useState } from 'react';
import { getProducts } from '../helpers/axios'
// import { useForm } from 'react-hook-form'
import ListProducts from '../components/ListProducts';
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
                                <div key={index}>
                                    <ListProducts
                                        image={product.image}
                                        name={product.name}
                                        price={product.price} />
                                </div>)
                        })
                    }
                </div>
                {/* <form typeof='submit' className='formOrder' onSubmit={handleSubmit(selectOption)}> */}

                <form typeof='submit' className='formOrder' >
                    <p>Resumen del pedido</p>
                    <FormInput
                        type='nameClient'
                        required
                        placeholder='Nombre del cliente'>
                    </FormInput>
                    <Button text='Enviar' >
                    </Button>
                    <Button text='Cancelar' >
                    </Button>
                </form>
            </section>
        </section>
    )
}

export default Order