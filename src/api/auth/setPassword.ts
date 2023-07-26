import axios from "axios";
import { urls } from "../urls";
import { config } from "process";
import { authHeader } from "./authHeader";
import { apiErrorHandler } from "./apiErrorHandler";

interface ISetPassword {
  new_password: string;
  current_password: string;
}

export const setPassword = async (password: ISetPassword) => {
  const token = localStorage.getItem("access_token");
  await axios
    .post(urls.AUTH_SET_PASSWORD, password, { headers: authHeader() })
    .catch(apiErrorHandler);
};
