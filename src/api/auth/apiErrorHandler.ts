import axios, { AxiosError } from "axios";
import { tokenRefresh } from "./tokenRefresh";

export const apiErrorHandler = async (err: AxiosError) => {
  if (err.response?.status === 401) {
    const refreshToken = localStorage.getItem("refresh__token");    
    if (refreshToken) {
      const response = await tokenRefresh({ refresh: refreshToken });
      localStorage.setItem("access_token", response.access);
      const config = err.config;
      if (config) {
        config.headers.authorization = `Bearer ${response.access}`;
        return axios.request(config);
      }
    }
  }
  throw err;
};
