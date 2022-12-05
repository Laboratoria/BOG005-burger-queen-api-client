import axios from 'axios';

const Productos = async (state) => {
    const peticion = await axios.get('http://localhost:8080/products', { headers: { "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZHlzQGdtYWlsLmNvbSIsImlhdCI6MTY3MDI0NzA4NywiZXhwIjoxNjcwMjUwNjg3LCJzdWIiOiIzIn0.D8EVGgkm6eHQoYA-1GY_vSCF4V4c8gqQI3uiNce9VKs` } });

    state(peticion.data)
}

export default Productos;