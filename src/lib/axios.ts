import axios from "axios"

const BASEURL = process.env.NEXT_PUBLIC_BACKEND_API_BASEURL

export default axios.create({
  baseURL: BASEURL,
  headers: { "Content-Type": "application/json" },
})

export const axiosAuth = axios.create({
  baseURL: BASEURL,
  headers: { "Content-Type": "application/json" },
})
