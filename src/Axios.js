import axios from 'axios'

const instance = axios.create({
    // baseURL: 'https://image-gallery-backend.herokuapp.com/'
    // baseURL: 'http://127.0.0.1:5000/'
    baseURL: process.env.REACT_APP_BASE_URI
});
export default instance