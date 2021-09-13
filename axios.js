import axios from 'axios';

const Instance = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': true
    },
    validateStatus: false,
    withCredentials: true,
});

export default Instance;