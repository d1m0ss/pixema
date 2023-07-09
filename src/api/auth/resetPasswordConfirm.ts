import axios from "axios";
import { urls } from "../urls";

interface resetPasswordConfirm {
  uid: string;
  token: string;
  new_password: string;
}

export const resetPasswordConfirm = async ({
  uid,
  token,
  new_password,
}: resetPasswordConfirm) => {
  await axios.post(urls.AUTH_RESET_PASSWORD_CONFIRM, { uid, token, new_password });
};
