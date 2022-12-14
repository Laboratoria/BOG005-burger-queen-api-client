import axios from 'axios';



const Productos = async (state) => {
    let token = localStorage.getItem('tokenUser')
    console.log(token, 'holllllllllllllll')

    const peticion = await axios.get('http://localhost:8080/products', { headers: { "Authorization": `Bearer ${token}` } });
    state(peticion.data)
}


export default Productos;