import axios from "axios";
import { urls } from "./urls";

export const getPosts = async () => {
  const response = await axios.get(urls.GET_POSTS);
  console.log(response);
  const data = response;
  return data;
};
