const API_KEY = "9345cdc6";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
const TMS_URL = `https://studapi.teachmeskills.by`;

export const urls = {
  GET_URL: `${BASE_URL}`,
  AUTH_USER: `${TMS_URL}/auth/users/`,
  AUTH_USER_ACTIVATION: `${TMS_URL}/auth/users/activation/`,
  AUTH_JWT: `${TMS_URL}/auth/jwt/create/`,
};
