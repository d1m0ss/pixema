import axios from "axios";
import { urls } from "./urls";
import { authHeader } from "./authHeader";

export const getUserInfo = async () =>
  (await axios.get(urls.GET_USER_INFO, { headers: authHeader() })).data;
