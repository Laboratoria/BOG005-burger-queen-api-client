import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getProducts, createProductPost } from '../helpers/axios'
import { CardListProducts } from '../components/CardListProducts'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import { useForm } from 'react-hook-form'
import Modal from '../components/Modal'


export const Products = () => {

const { handleSubmit } = useForm()
const [ListProductsTotal, setListProductsTotal] = useState([])
//const [updateListProducts, setUpdateListProducts] = useState(false)
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

const createProduct =  async () => {
    console.log('enviando formulario')
    const res = await createProductPost(mitoken, newProduct);
    console.log(res)
    if(res.status === 201){
        alert('Producto creado')
    } else {
        alert('No se creo el producto exitosamente')
    }
} 

console.log(new Date())

//console.log(ListProductsTotal)


// ---------- add ibeht

const [isOpenModal, setIsOpenModal] = useState(false);


const openModal = () => {
    setIsOpenModal(true)
}

const closeModal = () => {
    setIsOpenModal(false)
}

// ------

  return (
    <section className='productsAll'>
        <Header />
        <h3>Listado de productos</h3>
        <section>
            <button onClick={openModal}>
                Open Modal
            </button>
            <Modal
             isOpen={isOpenModal}
             closeModal= {closeModal}
            >
                    <p>Editar producto</p>
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
            </Modal>
        </section>

        <div>
        {ListProductsTotal.map((product, id) => (
            <div key={id}>
            <CardListProducts
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price} 
                type={product.type}
            />
            </div>
        ))}
        </div>
        <form typeof='submit' className='formOrder' onSubmit={handleSubmit(createProduct)} >
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
                        <option value='seleccion tipo' >Selecciona tipo</option>
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
