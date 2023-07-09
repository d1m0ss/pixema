const API_KEY = "9345cdc6";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
const TMS_URL = `https://studapi.teachmeskills.by`;

export const urls = {
  GET_URL: `${BASE_URL}`,
  AUTH_USER: `${TMS_URL}/auth/users/`,
  AUTH_USER_ACTIVATION: `${TMS_URL}/auth/users/activation/`,
  AUTH_JWT_CREATE: `${TMS_URL}/auth/jwt/create/`,
  AUTH_JWT_REFRESH: `${TMS_URL}/auth/jwt/refresh/`,
  AUTH_JWT_VERIFY: `${TMS_URL}/auth/jwt/verify/`,
  AUTH_RESET_PASSWORD: `${TMS_URL}/auth/users/reset_password/`,
  AUTH_RESET_PASSWORD_CONFIRM: `${TMS_URL}/auth/users/reset_password_confirm/`,
  GET_USER_INFO: `${TMS_URL}/auth/users/me/`,
};
