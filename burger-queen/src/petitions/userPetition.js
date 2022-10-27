import axios from 'axios'

const url = process.env.API_URL || 'http://localhost:8080/'


const loginUser = (dataLogin) => {

    //  axios.post(url+'login', dataLogin).then( res =>{
    //     console.log('res', res);}
    // )
    // return

    return axios.post(url+'login', dataLogin)
};

export default loginUser;