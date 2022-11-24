import axios from 'axios'
import { getToken, getUser } from './userPetition'

const url = process.env.API_URL || 'http://localhost:8080/'

// Mostras productos
const listProducts = async () => {

    return await axios({
        method: "GET", 
        url:url+'products',
        headers: {
            authorization: "Bearer " + getToken()
        }
    });
} 

// funcion de crear productos
const createProduct = (product) => {
    return axios({
        method: "POST",
        url: url+'products',
        headers: {
            authorization: 'Bearer ' + getToken()
        },
        data:product
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

//  funcion para editar producto

const editProduct = async (id, product)=>{

    return await axios({
        method: "PATCH", 
        url:url+'products/'+ id, 
        headers: {
            'Content-Type': 'application/json',
                authorization: 'Bearer ' + getToken(),
        },
        data: product,         
    })     
}

//--- Peticion para obtener un solo producto---//
const getOnlyProduct = async (id)=>{
    return await axios({
        method: 'GET',
        url:url+'products/'+ id,
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + getToken(),
        },
    })
}


// -----Peticion para crear orden -----//
const postOrder = async (newObject, idWaiter, clients) =>{
    return await axios({
        method: "POST",
        url: url+'orders',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getToken(),
        },
       data : {
            userId: idWaiter,
            client: clients,
            products: newObject,
            status: 'pending',
            dataEntry: new Date().toLocaleString('sv'),
        }
    })
}
// -----Peticion para ver ordenes -----//

const listOrder = async () => {
    return await axios({
        method: 'GET',
        url: url + 'orders',
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + getToken(),
        }
    })
}
// const orderStatus = async(orderId) => {
    
//     return await axios({
//         method: "PATCH",
//         url:url+'orders/'+ orderId,
//         headers: {
//             'content-type': 'application/json',
//             authorization: 'Bearer ' + getToken(),
//         },
//         data: {
//             status: 'delivering',
//             dateProcessed: new Date().toLocaleString('sv'),
//         }
//     })
// }

const orderStatusDelivered = async(orderId, token) => {
    console.log('order id', orderId, 'token', token)
    return await axios({
        method: "PATCH",
        url:url+'orders/'+ orderId,
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + token,
        },
        data: {
            status: 'delivered',
        }
    })
}

const deleteOrder = async (id)=>{

    return await axios({
        method: "DELETE", 
        url:url+'orders/'+ id, 
        headers: {
            'Content-Type': 'application/json',
            authorization: 'Bearer ' + getToken(),
        },
        data: {         
            id: id,
        },         
    }) }

export {listProducts, createProduct, deleteProduct, editProduct, getOnlyProduct, postOrder, listOrder, orderStatusDelivered, deleteOrder}

