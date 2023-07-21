import axios from "axios"

const api = axios.create({
  baseURL: "https://producture.justdesignfx.com/services/",
  headers: {
    "Content-type": "application/json",
  },
})

export default api
