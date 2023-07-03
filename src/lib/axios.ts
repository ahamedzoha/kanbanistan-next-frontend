import axios from "axios"

export default axios.create({
  baseURL: process.env.API_BASEURL,
  headers: { "Content-Type": "application/json" },
})
