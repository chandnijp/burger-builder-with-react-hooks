import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-with-react-hooks.firebaseio.com/'
});

export default instance;