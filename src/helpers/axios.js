import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY2NjkwMzQ4NiwiZXhwIjoxNjY2OTA3MDg2LCJzdWIiOiIyIn0.FhztbvYZ7DYeFAwEk5hYwXBVlbgZ543T9hnh07LhJ8U';

const loginUser = async () => {
    //     // return await axios.get(baseUrl + '/users')
    const rest = await axios({
        method: 'GET',
        url: baseUrl + '/users',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        // data: {
        //     email,
        //     password
        // }

    })
    console.log(rest.data)
    return rest
}

const getUser = async () => {
    const res = await axios({
        method: 'GET',
        url: baseUrl + '/products',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    });
    console.log(res.data)
    return res.data
};
console.log(getUser());

//console.log('probando data', loginUser())

export default loginUser