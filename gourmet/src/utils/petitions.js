import axios from 'axios'

const urlAPI = 'http://localhost:8080/'

function postUserPetition(emailUser, passwordUser) {
  return axios.post(urlAPI + 'login', { email: emailUser, password: passwordUser })
}

export { postUserPetition }