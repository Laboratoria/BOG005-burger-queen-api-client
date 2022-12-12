import axios from "axios"
const API = "http://localhost:8080";

let token = localStorage.getItem("tokenUser")
let userId = localStorage.getItem("userId")

export const postUser = async (email, password) => {
    const rest = await axios ({
        method: "POST",
        url: API + "/login",
        data: {
            email: email,
            password: password
        }
    })

    localStorage.setItem('tokenUser', rest.data.accessToken)
    token = rest.data.accessToken
    localStorage.setItem('userId', rest.data.user.id)
    userId = rest.data.user.id
    localStorage.setItem('userRole', rest.data.user.role)
    localStorage.setItem('userEmail', rest.data.user.email)
    return rest
}

export const getProducts = async () => {
    const res = await axios({
        method: "GET",
        url: API + "/products",
        headers: {
            "content-type": "application/json",
            "Authorization": "Bearer " + token, 
        },
    });
    return res.data
};