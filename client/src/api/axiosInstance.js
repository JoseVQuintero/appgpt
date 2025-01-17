import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Cambia al puerto donde corre tu backend
});

export default axiosInstance;
