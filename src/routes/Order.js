import React, { useEffect } from 'react'
import Header from '../components/Header'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import { useState } from 'react';
import { getProducts } from '../helpers/axios'
//import menu from '../helpers/menu'

//console.log('este es el menu', menu())

const Order = () => {

    const [productsOptions, setProductsOptions] = useState([])

  useEffect (() => {
      const mitoken = localStorage.getItem('tokenUser')
    
      const getProductsOption = async() => {
        const resp = await getProducts(mitoken)
        console.log(resp)
        setProductsOptions(resp)
        
    }

    getProductsOption()
    }, [])


       console.log(productsOptions)

    //    const selectMenu = () => {
        

    //    }

    return (
        <section className='order'>
                <Header />
            <section className='mainlist'>
                <select className='optionMenu'>
               { productsOptions.map((product) => (
                <option key={product.id} value='breakfast'>
                    {product.type}
                </option>
               )     
                )}
                </select>
                <form typeof='submit' className='formOrder'>
                    <p>Resumen del pedido</p>
                    <FormInput
                        type='nameClient'
                        //onChange={handleInputChangeEmail}
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