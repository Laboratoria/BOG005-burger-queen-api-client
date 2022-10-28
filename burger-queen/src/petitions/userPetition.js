import axios from 'axios'

const url = process.env.API_URL || 'http://localhost:8080/'


const loginUser = (dataLogin) => {
    return axios.post(url+'login', dataLogin)
};

// const infousuarios = ()=>{
//     axios.get(url+'user').then(res=>{
//         console.log('q llego',res);
//     })
// }
// infousuarios();

export default loginUser;