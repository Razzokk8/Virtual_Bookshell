import axios from 'axios';

const searchAxiosInstance = axios.create();

searchAxiosInstance.defaults.baseURL = 'https://openlibrary.org/search.json?';
// searchAxiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// searchAxiosInstance.defaults.headers.post
// ['Access-Control-Allow-Origin'] = '*'
// ['Content-Type'] = 'application/json'

// searchAxiosInstance.defaults.withCredentials = true;

export default searchAxiosInstance;
