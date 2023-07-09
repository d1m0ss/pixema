import axios from "axios";
import { urls } from "../urls";

interface IResetPassword {
  email: string;
}

export const resetPassword = async ({ email }: IResetPassword) => {
  await axios.post(urls.AUTH_RESET_PASSWORD, { email });
};
