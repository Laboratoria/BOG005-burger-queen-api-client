import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;


const loginUser = async (email, password) => {
    const rest = await axios({
        method: 'POST',
        url: baseUrl + '/login',
        data: {
            email: email,
            password: password
        }
    })
    console.log(rest)
    //console.log(rest.data.accessToken)
    return rest.status
}

// const getUser = async () => {
//     const res = await axios({
//         method: 'GET',
//         url: baseUrl + '/products',
//         headers: {
//             'content-type': 'application/json',
//             'Authorization': 'Bearer ' + token,
//         },
//     });
//     console.log(res.data)
//     return res.data
// };
// console.log(getUser());

// loginUser("grace.hopper@systers.xyz", "123456")

//console.log('probando data', loginUser())

export default loginUser