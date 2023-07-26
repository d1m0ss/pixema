import axios from "axios";
import { urls } from "../urls";
import { apiErrorHandler } from "./apiErrorHandler";

interface IVerifyTokenData {
  token: string;
}

export const tokenVerify = async (verifyTokenData: IVerifyTokenData) =>
  (await axios.post(urls.AUTH_JWT_VERIFY, verifyTokenData).catch(apiErrorHandler))
    .data;
