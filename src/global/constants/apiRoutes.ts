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

  //users
  getAddresses: `/users/addresses`,
  getAddressesId: (id: string) => `/users/addresses/${id}`,

  // product
  getProducts: (page: number, limit: number) => `/products?page=${page}&limit=${limit}`,
  getProductDetail: (id: string) => `/products/${id}`,

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
};
export default API_ROUTES;
