import axios from 'axios'

const api = axios.create({
    baseURL: 'https://treinamentoreact.herokuapp.com/public/api'
})

export default api