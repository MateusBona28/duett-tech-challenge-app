import axios from "axios";


export const API = axios.create({
    baseURL: "https://localhost:7284/api",
    timeout: 10000,
})
