import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {'Access-Control-Allow-Origin': 'http://localhost:3000/'}
});