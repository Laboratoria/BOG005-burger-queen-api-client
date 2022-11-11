import axios from 'axios'
import { getToken } from './userPetition'

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

export {listProducts, createProduct}