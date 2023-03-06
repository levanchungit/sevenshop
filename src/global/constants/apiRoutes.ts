export const API_ROUTES = {
  // auth
  login: `/user/login`,
  logout: `/user/logout`,
  register: `/user/register`,
  check_otp: `/user/check_otp`,
  set_password: `/user/set_password`,
  refresh_token: `/user/refresh_token`,
  forgotPassword: `/user/forgotPassword`,
  changePassword: `/user/changePassword`,
  me: `/user/me`,

  // product
  getProducts: `/product/`,
};
export default API_ROUTES;
