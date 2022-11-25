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
function postNewProduct(name, price, image, type) {
  return axios.post(urlAPI + 'products', { name, price, image, type }, { headers: { Authorization: 'Bearer ' + getToken() } } )
}



export { postUserPetition, getProductList, getUser, getToken, postNewProduct }