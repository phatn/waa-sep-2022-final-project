import axios from 'axios';
import BASE_URL from 'Constants';

export const AxiosService = (token, isFile = false) => {
  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use(
    (config) => {
      config.baseURL = BASE_URL;
      
      const { origin } = new URL(config.url);
      const allowedOrigin = [BASE_URL];

      if (allowedOrigin.includes(origin)) {
        config.headers.authorization = `Bearer ${token}`;
        if (!isFile) {
          config.headers.post = { "Content-Type": "application/json" };
          config.headers.put = { "Content-Type": "application/json" };
        } else {
          config.headers.post = { "Content-Type": "multipart/form-data" };
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};