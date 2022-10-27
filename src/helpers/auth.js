import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
const TOKEN_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY2NjkwMzQ4NiwiZXhwIjoxNjY2OTA3MDg2LCJzdWIiOiIyIn0.FhztbvYZ7DYeFAwEk5hYwXBVlbgZ543T9hnh07LhJ8U'

export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = () => {
    localStorage.getItem(TOKEN_KEY)
}