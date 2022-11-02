import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getProducts } from '../helpers/axios'
import { CardListProducts } from '../components/CardListProducts'
import FormInput from '../components/FormInput'
import Button from '../components/Button'

export const Products = () => {

const [ListProductsTotal, setListProductsTotal] = useState([])
const [newProduct, setNewProduct] = useState({dateEntry: "", id: "", image: "", name: "", price: "", type: ""})

const mitoken = localStorage.getItem('tokenUser')

useEffect(() => {
    // todo lo que este aca se ejecutara desde el inicio de la app
    getProducts(mitoken).then(res => {
        setListProductsTotal(res)
    })
}, [mitoken])

const handleChange = (e) => {
    console.log('me estoy ejecutando')
    setNewProduct({
        ...newProduct, 
        [e.target]: e.target.value
    })
}

console.log(ListProductsTotal)

  return (
    <section className='productsAll'>
        <Header />
        <h3>Listado de productos</h3>
        <div>
        {ListProductsTotal.map((product, id) => (
            <div key={id}>
            <CardListProducts
                image={product.image}
                name={product.name}
                price={product.price} 
                type={product.type}
            />
            </div>
        ))}
        </div>
        <form typeof='submit' className='formOrder' onChange={handleChange}>
                    <p>Agregar producto</p>
                    <FormInput
                        type='dateEntryProduct'
                        required
                        value={newProduct.dateEntry}>
                    </FormInput>
                    <FormInput
                        type='idNewProduct'
                        required
                        placeholder='id'
                        value={newProduct.id}>
                    </FormInput>
                    <FormInput
                        type='imgNewProduct'
                        required
                        placeholder='cargar imagen'
                        value={newProduct.image}>
                    </FormInput>
                    <FormInput
                        type='nameNewProduct'
                        required
                        placeholder='Nombre del nuevo producto'
                        value={newProduct.name}>
                    </FormInput>
                    <FormInput
                        type='priceNewProduct'
                        required
                        placeholder='Precio del nuevo producto'
                        value={newProduct.price}>
                    </FormInput>
                    <FormInput
                        type='typeNewProduct'
                        required
                        placeholder='Tipo de producto'
                        value={newProduct.type}>
                    </FormInput>
                    <Button text='Agregar' >
                    </Button>
                    <Button text='Cancelar' >
                    </Button>
                </form>
    </section>
  )
}
