import axios from "axios";
import { urls } from "./urls";

interface IregistrationFormData {
  username: string;
  email: string;
  password: string;
}

export const postNewUser = async (formData: IregistrationFormData) => {
  await axios.post(urls.AUTH_USER, formData);
};
