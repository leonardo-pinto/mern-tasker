import axios from "axios";
import { clearLocalStorage } from "../utils/auth";

const httpClient = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAuthAccessToken = () => localStorage.getItem("accessToken");

const authInterceptor = (config) => {
  config.headers["Authorization"] = `Bearer ${getAuthAccessToken()}`;
  return config;
};

const responseInterceptor = (response) => response;

const errorInterceptor = (error) => {
  if (!error.response) {
    console.error("Server is down!");
  }

  if (error?.response?.status === 401) {
    clearLocalStorage();
  }

  if (error?.response?.status === 500) {
    console.error("An unexpected server error occurred!");
  }

  return Promise.reject(error);
};

httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;
