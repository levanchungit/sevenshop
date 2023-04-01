export const API_ROUTES = {
  // auth
  login: `/auth/login`,
  logout: `/auth/logout`,
  register: `/auth/register`,
  check_otp: `/auth/check_otp`,
  set_password: `/auth/set_password`,
  set_password_forgot: `/auth/set_password_forgot`,
  refresh_token: `/auth/refresh_token`,
  forgotPassword: `/auth/forgot_password`,
  changePassword: `/auth/change_password`,
  me: `/auth/me`,

  //users
  getAddresses: `/users/addresses`,
  getAddressesId: (id: string) => `/users/addresses/${id}`,

  // product
  getProducts: (page: number, limit: number) => `/products?page=${page}&limit=${limit}`,
  getProductDetail: (id: string) => `/products/${id}`,
  getFavoritesProduct: (page: number, limit: number) => `/products/favorites/get?page=1&limit=5`,

  //categories
  getCategories: `/categories`,

  //cart
  getCarts: `/carts`,
  changeQuantity: `/carts`,

  //colors
  getColors: '/colors',

  //sizes
  getSizes: '/sizes',

  //order
  addToCart: 'order/addToCart/',

  // orders
  getOrders: `/orders/me`,
  getOrderById: (id: string) => `/orders/me/${id}`,

  // checkout
  checkout: '/pay',

  // notifications
  getNotifications: (id: string) => `/notification/get/${id}`,
};
export default API_ROUTES;
