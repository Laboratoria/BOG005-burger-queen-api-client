import axios from 'axios';

const Productos = async (state) => {
    const peticion = await axios.get('http://localhost:8080/products', { headers: { "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZHlzQGdtYWlsLmNvbSIsImlhdCI6MTY3MDE4MTM1NywiZXhwIjoxNjcwMTg0OTU3LCJzdWIiOiIzIn0.jz3mcEudtDYp_Eqtnf-7ZhApKlmrOGcB5Vqh03fCaXU` } });

    state(peticion.data)
}

export default Productos;