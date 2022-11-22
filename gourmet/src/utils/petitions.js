import axios from 'axios'

const urlAPI = 'http://localhost:8080/'


function postUserPetition(emailUser, passwordUser) {
  return axios.post(urlAPI + 'login', { email: emailUser, password: passwordUser })
}

const getUser = () => {
  return JSON.parse(sessionStorage.getItem('user'))
};

const getToken = () => {
  return getUser().accessToken
}

function getProductList() {
  return axios.get(urlAPI + 'products', { headers: { Authorization: 'Bearer ' + getToken() } })
}

export { postUserPetition, getProductList, getUser, getToken }