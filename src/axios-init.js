import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://lizardbellycollective-61b17.firebaseio.com/'
});

export default instance;