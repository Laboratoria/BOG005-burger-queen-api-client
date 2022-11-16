import React, {useState} from 'react'
import { deleteProduct, updateProduct } from '../helpers/axios'
import Button from './Button'
import Modal from './Modal'
import FormInput from './FormInput'

export const CardListProducts = (product) => {

    //------ add ibeht

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [productUpdate, setProductUpdate] = useState({dateEntry: new Date(), image: product.image, name: product.name, price: product.price, type: ""});
    //--------
    
    // console.log(product)

    const mitoken = localStorage.getItem('tokenUser')

    //console.log(product)

    const handleDelete = async() => {
        console.log("eliminando producto", product.id)
        const resDelete = await deleteProduct(mitoken, product, product.id )
        console.log(resDelete)
        if(resDelete.status === 200){
            alert('Producto eliminado')
        }else{
            alert('No se elimino el producto')
        }
        
    }

    const handleEdit = () => {
        console.log('editando')
        setIsOpenModal(true)

    }

    const handleChange = (e) => {
        console.log('me estoy ejecutando')
        setProductUpdate({
            ...productUpdate, 
            [e.target.name]: e.target.value
        })
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    const updateProductNow = async () => {
        const resUpdate = await updateProduct(mitoken, productUpdate, product.id )
        console.log(resUpdate)
        if(resUpdate.status === 200){
            alert('Producto editado')
        }else{
            alert('No se edito el producto')
        }
    }

    return (
        <div className='productsContainer'>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>{product.type}</p>
            <Button text='Editar' onClick={handleEdit} />
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
                        value={product.image}
                        //onChange={handleChange}
                        >
                    </FormInput>
                    <FormInput
                        type='nameNewProduct'
                        name= 'name'
                        required
                        placeholder='Nombre del nuevo producto'
                        value={productUpdate.name}
                        onChange={handleChange}
                        >
                    </FormInput>
                    <FormInput
                        type='string'
                        name= 'price'
                        required
                        placeholder='Precio del nuevo producto'
                        value={product.price}
                        // onChange={handleChange}
                        >
                    </FormInput>
                    <select  name='type' onChange={handleChange}>
                        <option value='seleccion tipo' >Selecciona tipo</option>
                        <option value='Desayuno'>Desayuno</option>
                        <option  value='Almuerzo'>Almuerzo</option>
                    </select>
                 <button onClick={updateProductNow}>Aceptar</button>
                 <button onClick={closeModal}>Cancelar</button>
            </Modal>
            <Button text='Eliminar'  onClick={handleDelete} />
        </div>
    )

}
