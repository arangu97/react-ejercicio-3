import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dsm-project-aranguren.firebaseio.com'
});

export default instance;