import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getProducts } from '../helpers/axios'
import { CardListProducts } from '../components/CardListProducts'
import FormInput from '../components/FormInput'
import Button from '../components/Button'

export const Products = () => {

const [ListProductsTotal, setListProductsTotal] = useState([])
const [newProduct, setNewProduct] = useState({dateEntry: new Date(), image: "", name: "", price: 0, type: ""})



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
        [e.target.name]: e.target.value
    })
}

console.log(new Date())

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
                        type='url'
                        name= 'image'
                        required
                        placeholder='cargar imagen'
                        value={newProduct.image}
                        onChange={handleChange}
                        >
                    </FormInput>
                    <FormInput
                        type='nameNewProduct'
                        name= 'name'
                        required
                        placeholder='Nombre del nuevo producto'
                        value={newProduct.name}
                        onChange={handleChange}
                        >
                    </FormInput>
                    <FormInput
                        type='string'
                        name= 'price'
                        required
                        placeholder='Precio del nuevo producto'
                        value={newProduct.price}
                        onChange={handleChange}
                        >
                    </FormInput>
                    <select  name='type' onChange={handleChange}>
                        <option value='Desayuno'>Desayuno</option>
                        <option  value='Almuerzo'>Almuerzo</option>
                    </select>
                    <Button text='Agregar' >
                    </Button>
                    <Button text='Cancelar' >
                    </Button>
                </form>
    </section>
  )
}
