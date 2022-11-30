import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
let token = localStorage.getItem('tokenUser')
let userId = localStorage.getItem('userId')

//const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY2NzE2NTk1OSwiZXhwIjoxNjY3MTY5NTU5LCJzdWIiOiIyIn0.RqYLrbO8Psp6CRGgMAIHveLD8plFy4lrdBHzlyTYSXY'

const loginUser = async (email, password) => {
    const rest = await axios({
        method: 'POST',
        url: baseUrl + '/login',
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
        method: 'GET',
        url: baseUrl + '/products',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    });
    return res.data
};

export const createProductPost = async (objectProduct) => {
    const res = await axios({
        method: 'POST',
        url: baseUrl + '/products',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data: objectProduct
    });
    return res
};

export const editProduct = async (objectProduct, idProduct) => {
    const res = await axios({
        method: 'PATCH',
        url: baseUrl + '/products/' + idProduct,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data: objectProduct
    });
    return res
};



export const deleteProduct = async (objectProduct, idProduct) => {
    const res = await axios({
        method: 'DELETE',
        url: baseUrl + '/products/' + idProduct,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data: objectProduct
    });
    return res
};

export const getUsers = async () => {
    const res = await axios({
        method: 'GET',
        url: baseUrl + '/users',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    });
    return res.data
};

export const createUserPost = async (objectUser) => {
    const res = await axios({
        method: 'POST',
        url: baseUrl + '/users',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data: objectUser
    });
    return res
};

export const deleteUser = async (objectUser, idUser) => {
    const res = await axios({
        method: 'DELETE',
        url: baseUrl + '/users/' + idUser,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        // data: objectUser
    });
    return res
};

export const updateUser = async (objectUser, idUser) => {
    const res = await axios({
        method: 'PATCH',
        url: baseUrl + '/users/' + idUser,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data: objectUser
    });
    return res
};

export const orderPetition = async (objectProducts, client) => {
    const res = await axios({
        method: 'POST',
        url: baseUrl + '/orders',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data: {
            userId: userId,
            client: client,
            products: objectProducts,
            status: 'pending',
            dataEntry: new Date().toLocaleString('sv')
        }
    });
    return res.status
};

export const viewOrderPending = async () => {
    const res = await axios({
        method: 'GET',
        url: baseUrl + '/orders',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    });
    return res.data
};

export const changeOrderToDelivering = async (orderId) => {
    const res = await axios({
        method: 'PATCH',
        url: baseUrl + '/orders/' + orderId,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data: {
            status: 'delivering',
            dateProcessed: new Date().toLocaleString('sv'),
        }
    });
    return res
};

export const changeOrderToDelivered = async (orderId) => {
    const res = await axios({
        method: 'PATCH',
        url: baseUrl + '/orders/' + orderId,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data: {
            status: 'delivered',
        }
    });
    return res
};

export const deleteOrderPending = async (orderId) => {
    const res = await axios({
        method: 'DELETE',
        url: baseUrl + '/orders/' + orderId,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    });
    return res
};



export default loginUser