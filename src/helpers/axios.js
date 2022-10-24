import axios from "axios";


const baseUrl = process.env.REACT_APP_API_URL;

const loginUser = (data) => {
    return axios.post(baseUrl + '/login', data)
}

export default loginUser