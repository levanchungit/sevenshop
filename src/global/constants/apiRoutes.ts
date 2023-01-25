const PREFIX = '';

export const API_ROUTES = {
  // auth
  login: `${PREFIX}/user/login`,
  logout: `${PREFIX}/user/logout`,
  refresh_token: `${PREFIX}/user/refresh_token`,
  me: `${PREFIX}/user/me`,
};

export default API_ROUTES;
