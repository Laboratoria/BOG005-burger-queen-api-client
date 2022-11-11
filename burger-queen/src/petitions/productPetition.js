import axios from 'axios'
import { getToken } from './userPetition'

const url = process.env.API_URL || 'http://localhost:8080/'

const listProducts = async () => {

    return await axios({
        method: "GET", 
        url:url+'products',
        headers: {
            authorization: "Bearer " + getToken()
        }
    });
} 

 //---Funcion de peticion para eliminar Usuario---//
 const deleteProduct = async (id, product)=>{

    return await axios({
        method: "DELETE", 
        url:url+'products/'+ id, 
        headers: {
            'Content-Type': 'application/json',
                authorization: 'Bearer ' + getToken(),
        },
        data: {         
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            type: product.type,

        },         
    })     
}

export {listProducts, deleteProduct}