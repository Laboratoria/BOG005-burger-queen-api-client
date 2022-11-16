import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getProducts, createProductPost } from '../helpers/axios'
import { CardListProducts } from '../components/CardListProducts'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import { useForm } from 'react-hook-form'
<<<<<<< HEAD
import Modal from '../components/Modal'
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
>>>>>>> 2058766246d24161ab1cee3f2dc85999d2f14eea


export const Products = () => {

    const { handleSubmit } = useForm()
    const [ListProductsTotal, setListProductsTotal] = useState([])
    //const [updateListProducts, setUpdateListProducts] = useState(false)
    const [newProduct, setNewProduct] = useState({ dateEntry: new Date(), image: "", name: "", price: 0, type: "" })

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

    const createProduct = async () => {
        console.log('enviando formulario')
        const res = await createProductPost(mitoken, newProduct);
        console.log(res)
        if (res.status === 201) {
            // alert('Producto creado')
            Swal.fire(
                'Bien hecho!',
                'El producto se creó con éxito!',
                'success'
            )

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo ocurrió y no se pudo crear el producto!'
            })
            // alert('No se creo el producto exitosamente')
        }
    }

    // console.log(new Date())

    console.log(ListProductsTotal)

    return (
        <section>
            <Header />
            <section className='productsAll'>
                <div className='containerBtnBack'>
                    <Button className='btnStateOrder' text='Inicio'><FontAwesomeIcon className='iconArrow' icon={faCircleArrowRight} /></Button>
                </div>
                <h3>Administración de productos</h3>

<<<<<<< HEAD

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
=======
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
                            >
                            </FormInput>
                            <select className='SelectTypeProduct' name='type' onChange={handleChange}>
                                <option value='seleccion tipo' >Selecciona tipo</option>
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
                                    id={product.id}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    type={product.type}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
>>>>>>> 2058766246d24161ab1cee3f2dc85999d2f14eea
}
