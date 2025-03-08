import axios from "axios";

const axiosInstance = axios.create({
  responseType: "json",
  headers: {
    "content-type": "application/json",
  },
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

export const setupAxios = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      config.withCredentials = false;
      return config;
    },
    (error) => {
      console.error("axios error: ", error);
      return Promise.reject(error);
    }
  );
};

export default axiosInstance;
