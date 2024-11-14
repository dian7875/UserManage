import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;
const token = localStorage.getItem('Token')

const api = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true, 
});

export default api;