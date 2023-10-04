import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getProducts, createProductPost } from '../helpers/axios'
import { CardListProducts } from '../components/CardListProducts'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export const Products = () => {

    const navegate = useNavigate()

    const { handleSubmit } = useForm()
    const [ListProductsTotal, setListProductsTotal] = useState([])
    const [newProduct, setNewProduct] = useState({ dateEntry: new Date(), image: "", name: "", price: 0, type: "" })

    useEffect(() => {
        // todo lo que este aca se ejecutara desde el inicio de la app
        if (ListProductsTotal.length === 0) {
            getProducts().then(res => {
                setListProductsTotal(res)
            })
        }

    }, [ListProductsTotal])

    const handleChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        })
    }

    const createProduct = async () => {
        const res = await createProductPost(newProduct);
        if (res.status === 201) {
            Swal.fire(
                'Bien hecho!',
                'El producto se creó con éxito!',
                'success'
            )
            setListProductsTotal((lista) => [...lista, res.data])
            setNewProduct({ dateEntry: new Date(), image: "", name: "", price: 0, type: "" })

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo ocurrió y no se pudo crear el producto!'
            })
        }
    }

    return (
        <section>
            <Header />
            <section className='productsAll'>
                <div className='containerBtnBack'>
                    <Button className='btnStateOrder' text='Inicio' onClick={() => { navegate('/admin') }}><FontAwesomeIcon className='iconArrow' icon={faCircleArrowRight} /></Button>
                </div>
                <h3>Administración de productos</h3>

                <div className='containerFormListProducts'>
                    <div className='containerFormAddProduct'>
                        <form typeof='submit' className='formOrder formAddProduct' onSubmit={handleSubmit(createProduct)} >
                            <p className='pAddProductForm'>Agregar producto</p>
                            <FormInput
                                className='inputCargarImagen'
                                type='url'
                                name='image'
                                required
                                placeholder='cargar imagen'
                                value={newProduct.image}
                                onChange={handleChange}
                                aria-label = 'image'
                            >
                            </FormInput>
                            <FormInput
                                className='inputNombreProducto'
                                type='nameNewProduct'
                                name='name'
                                required
                                placeholder='Nombre del nuevo producto'
                                value={newProduct.name}
                                onChange={handleChange}
                                aria-label = 'name'
                            >
                            </FormInput>
                            <FormInput
                                className='inputPrecio'
                                type='string'
                                name='price'
                                required
                                placeholder='Precio del nuevo producto'
                                value={newProduct.price}
                                onChange={handleChange}
                                aria-label = 'price'
                            >
                            </FormInput>
                            <select defaultValue='Selecciona tipo' className='SelectTypeProduct' name='type' onChange={handleChange} aria-label = 'type'>
                                <option value='Selecciona tipo' disabled>Selecciona tipo</option>
                                <option value='Desayuno'>Desayuno</option>
                                <option value='Almuerzo'>Almuerzo</option>
                            </select>

                            <section className='sectionBtn'>
                                <Button text='Agregar' className='btnEnviar'>
                                </Button>
                                <Button text='Cancelar' className='btnCancel'>
                                </Button>
                            </section>
                        </form>
                    </div>
                    <div className='containerProductsAdmin'>
                        {ListProductsTotal.map((product, id) => (
                            <div key={id}>
                                <CardListProducts
                                    product={product}
                                    setListProductsTotal={setListProductsTotal}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}
