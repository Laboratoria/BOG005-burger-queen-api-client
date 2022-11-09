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

export {listProducts}