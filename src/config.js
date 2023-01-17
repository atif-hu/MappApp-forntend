import axios from 'axios'

export const axiosInstance=axios.create({
    baseURL : "https://mappapp.onrender.com/api"
})