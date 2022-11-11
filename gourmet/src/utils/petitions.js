import axios from 'axios'

const urlAPI = 'http://localhost:8080/'

const postUserPetition = (dataLoginUser) => {
  return axios.post(urlAPI + 'login', dataLoginUser)
}

export { postUserPetition }