import axios from "axios";
import { urls } from "../urls";

interface IPostLogin {
  email: string;
  password: string;
}

export const postLogin = async (data: IPostLogin) =>
  (await axios.post(urls.AUTH_JWT_CREATE, data)).data;
