import axios from "axios";
import { urls } from "./urls";
import { authHeader } from "./auth/authHeader";
import { apiErrorHandler } from "./auth/apiErrorHandler";

export const getUserInfo = async () =>
  (
    await axios
      .get(urls.GET_USER_INFO, { headers: authHeader() })
      .catch(apiErrorHandler)
  ).data;
