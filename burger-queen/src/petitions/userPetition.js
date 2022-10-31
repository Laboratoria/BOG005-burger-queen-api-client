import axios from 'axios'

const url = process.env.API_URL || 'http://localhost:8080/'


const loginUser = (dataLogin) => {
    return axios.post(url+'login', dataLogin)
};

const getUser = ()=>{
     return JSON.parse(sessionStorage.getItem('user'))
};

const getToken = ()=>{
    console.log('token', getUser().accessToken)
    return getUser().accessToken
}



const listUser = ()=>{
   axios({
        method: 'GET',
        url: url+'users',
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + getToken(),
        }
    })
    .then(res=>{
        console.log('q llego',res.data);
        return res.data
    })
    .catch(
        {
            "error": "string"
          }
    )
}


export {loginUser, getToken, listUser}