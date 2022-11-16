import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
//const mitoken = localStorage.getItem('tokenUser')
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
    //console.log(rest)
    console.log(rest.data.accessToken)
    localStorage.setItem('tokenUser', rest.data.accessToken)
    //console.log(rest.data.accessToken)
    return rest.status
}

export const getProducts = async (token) => {
    const res = await axios({
        method: 'GET',
        url: baseUrl + '/products',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    });
    console.log(res.data)
    //console.log(res)
    return res.data
};
// console.log(getProducts(mitoken));

export const createProductPost = async (token, objectProduct) => {
    console.log(objectProduct)
    const res = await axios({
        method: 'POST',
        url: baseUrl + '/products',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data: objectProduct
    });
    // console.log(res.data)
    return res
};

export const deleteProduct = async (token, objectProduct, idProduct) => {
    const res = await axios({
        method: 'DELETE',
        url: baseUrl + '/products/' + idProduct,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data: objectProduct
    });
    // console.log(res.data)
    return res
};

export const updateProduct = async (token, objectProduct, idProduct) => {
    const res = await axios({
        method: 'PATCH',
        url: baseUrl + '/products/' + idProduct,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data: objectProduct
    });
    // console.log(res.data)
    return res
};









// export const getListProducts= async (token) => {
//     const res = await axios({
//         method: 'GET',
//         url: baseUrl + '/products',
//         headers: {
//             'content-type': 'application/json',
//             'Authorization': 'Bearer ' + token,
//         },
//     });
//     // console.log(res.data)
//     return res.data
// };
// console.log(getProducts(mitoken));

// loginUser("grace.hopper@systers.xyz", "123456")

//console.log('probando data', loginUser())

// export const dataUser = async () => {
//     const rest = await axios({
//         method: 'GET',
//         url: baseUrl + '/users',
//         headers: {
//             'content-type': 'application/json',
//             'Authorization': 'Bearer ' + token,
//         },
//     })
//     console.log(rest)
//     //console.log(rest.data.accessToken)
//     return rest
// }
// console.log(dataUser());

export default loginUser