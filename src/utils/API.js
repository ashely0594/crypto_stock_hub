import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8080',  // Updated to match Tomcat port
    headers: {
        'Content-Type': 'application/json',
    }
});

export default API; 
