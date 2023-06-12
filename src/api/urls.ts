const API_KEY = "9345cdc6";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const urls = {
  GET_POSTS: `${BASE_URL}&type=movie&y>2020`,
};
