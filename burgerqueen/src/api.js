import axios from 'axios';

const Productos = async (state) => {
    const peticion = await axios.get('http://localhost:8080/products', { headers: { "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZHlzQGdtYWlsLmNvbSIsImlhdCI6MTY3MDk0ODEzMCwiZXhwIjoxNjcwOTUxNzMwLCJzdWIiOiIzIn0.8zoi74fy7_ENBi_391Kwwtdxd25a-ONCrC0puhzdT4E` } });
    state(peticion.data)
}


export default Productos;