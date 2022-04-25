import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://emtlibrarybackend191149.herokuapp.com',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});

export default instance;
