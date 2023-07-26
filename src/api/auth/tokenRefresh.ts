import axios from "axios";
import { urls } from "../urls";

interface IRefreshAccessToken {
  refresh: string;
}

export const tokenRefresh = async (refreshTokenData: IRefreshAccessToken) =>
  (await axios.post(urls.AUTH_JWT_REFRESH, refreshTokenData)).data;
