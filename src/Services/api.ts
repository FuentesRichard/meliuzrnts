import axios from 'axios';

const api = axios.create({
    baseURL: 'https://richard-meliuz-server-rn.herokuapp.com/',
})

export default api;