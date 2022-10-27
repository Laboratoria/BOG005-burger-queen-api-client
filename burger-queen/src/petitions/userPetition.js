import axios from 'axios'

const url = process.env.API_URL || 'http://localhost:8080/'


const loginUser = (dataUSER) => {
    
    console.log('peticion', url+'users*')
    console.log('dentro de la funcion', dataUSER);
     axios.post(url+'login', dataUSER).then( res =>{
        console.log('res', res);

    }
    )
    return
};

export default loginUser;