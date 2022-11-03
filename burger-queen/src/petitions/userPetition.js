import axios from 'axios'


const url = process.env.API_URL || 'http://localhost:8080/'


const loginUser = (dataLogin) => {
    return axios.post(url + 'login', dataLogin)
};

const getUser = () => {
    return JSON.parse(sessionStorage.getItem('user'))
};

const getToken = () => {
    console.log('token', getUser().accessToken)
    return getUser().accessToken
}

const getId = () => {
    return getUser().user.id;
}

const listUser = async () => {
    return await axios({
        method: 'GET',
        url: url + 'users',
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + getToken(),
        }
    })

}
  //---Funcion de peticion para Crear Usuario---//
const createDataUser = async (dataNewUser) => {
    console.log('LLEGA DATA NEW', dataNewUser); 
    return await axios({
        method: 'POST',
        url: url + 'users',
        headers: {
            'Content-Type': 'application/json',
            authorization: 'Bearer ' + getToken(),
        },
        data:
        {
            email: dataNewUser.email,
            password: dataNewUser.password,
            role: dataNewUser.role,
        }

     })
    }
<<<<<<< HEAD
=======

      //---Funcion de peticion para Editar Usuario---//
    
>>>>>>> f4b0ee74919326734f3f58c35cfcc1b650a269e8

      //---Funcion de peticion para eliminar Usuario---//
  const userDelete = async (id, user)=>{

    return await axios({
        method: "DELETE", 
        url:url+'users/'+ id, 
        headers: {
            'Content-Type': 'application/json',
                authorization: 'Bearer ' + getToken(),
        },
        data: {         
            email: user.email ,
            password: user.password,
            role:user.role,
        },         
    })     
}




export { loginUser, getToken, listUser, createDataUser, userDelete }