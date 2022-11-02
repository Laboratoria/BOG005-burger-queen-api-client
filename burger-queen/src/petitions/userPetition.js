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

const createDataUser = async (dataNewUser) => {
    console.log('LLEGA DATA NEW', dataNewUser); 
    return await axios({
        method: 'POST',
        url: url + 'users',
        headers: {
            'Content-Type': 'application/json',
            // "x-access-key": dataNewUser,
            authorization: 'Bearer ' + getToken(),
        },
        // body: JSON.stringify(dataNewUser),
        data:
        {
            email: dataNewUser.email,
            password: dataNewUser.password,
            role: dataNewUser.role,
        }

     })
    }
    // .then((response) => {
    //     if (!response.ok) {
    //       throw Error('Error al crear usuario');
    //     }
    //     return response.json();
    //   });
    



export { loginUser, getToken, listUser, createDataUser }