import axios from 'axios';
import Constants from 'Constants';

export const AxiosService = (token, isFile = false) => {
  const axiosInstance = axios.create({
    baseURL: Constants.BASE_URL
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const { origin } = new URL(config.url, Constants.BASE_URL);
      const allowedOrigin = [Constants.BASE_URL];

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