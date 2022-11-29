import axios from 'axios'

const urlAPI = 'http://localhost:8080/'

// Enviando información de usuario para autenticar
function postUserPetition(emailUser, passwordUser) {
  return axios.post(urlAPI + 'login', { email: emailUser, password: passwordUser })
}

// Obteniendo el usuario del session storage
const getUser = () => {
  return JSON.parse(sessionStorage.getItem('user'))
};
// Obteniendo el token del usuario
const getToken = () => {
  return getUser().accessToken
}
// Obteniendo el listado de productos
function getProductList() {
  return axios.get(urlAPI + 'products', { headers: { Authorization: 'Bearer ' + getToken() } })
}
// Enviando la información para crear el nuevo producto
function postNewProduct(name, price, type, image) {
  return axios.post(urlAPI + 'products', { name, price, image, type }, { headers: { Authorization: 'Bearer ' + getToken() } })
}

// Petición para obtener el URL de la imágen 
async function obtainImgURL(img) {

  const form = new FormData();
  form.append('image', img);
  const apiKey = '13f6c238e5259d35197fe6cf74b0adad'
  const url = `https://api.imgbb.com/1/upload?key=${apiKey}`
  
  const petition = {
    method: 'POST',
    body: form
  }
  const response = await fetch(url,petition) 
  const dataResponse = await response.json()

  return dataResponse.data.url
}



export { postUserPetition, getProductList, getUser, getToken, postNewProduct, obtainImgURL }