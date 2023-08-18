import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://dev-layers-portal-api.azurewebsites.net/api/',
  headers: {
    ContentType: 'application/json',
    Accept: 'application/json',
  },
})

export default apiClient
