import axios from "axios";
import { urls } from "./urls";

export const getPosts = async () => {
  const response = await axios.get(urls.GET_URL);
  const data = response;
  return data;
};
