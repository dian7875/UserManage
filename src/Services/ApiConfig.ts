import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7222/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

export default api;