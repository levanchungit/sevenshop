export const API_ROUTES = {
  // auth
  login: `/auth/login`,
  logout: `/auth/logout`,
  register: `/auth/register`,
  check_otp: `/auth/check_otp`,
  set_password: `/auth/set_password`,
  refresh_token: `/auth/refresh_token`,
  forgotPassword: `/auth/forgotPassword`,
  changePassword: `/auth/changePassword`,
  me: `/auth/me`,

  // product
  getProducts: `/products`,
  getProductDetail: (id: string) => `/products/${id}`,

  //categories
  getCategories: `/categories`,

  //order
  addToCart: 'order/addToCart/',
};
export default API_ROUTES;
