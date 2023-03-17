import axios from "axios";


export const API = axios.create({
    baseURL: "http://localhost:5042/api",
    timeout: 10000,
})
