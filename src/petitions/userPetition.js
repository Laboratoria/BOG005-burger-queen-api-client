import axios from "axios";

const API = "http://localhost:8080/";

const postUser = (userEmail, userPassword) => {
    return axios.post(API + "login", { email: userEmail, password: userPassword})
}

export { postUser }