import axios from "axios";

export const API = axios.create({
    // baseURL: 'http://localhost:5000/',
    baseURL: 'https://payfor-back.azurewebsites.net/',
    // timeout: 50000,
})
