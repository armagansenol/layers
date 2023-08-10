import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dev-layers-portal-api.azurewebsites.net/api/',
  headers: {
    ContentType: 'application/json',
    Accept: 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can modify the request config here (e.g., adding headers)
    return config
  },
  (error) => {
    // Handle request error
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // You can process successful responses here
    return response
  },
  (error) => {
    // Handle response error
    return Promise.reject(error)
  }
)

export default api
