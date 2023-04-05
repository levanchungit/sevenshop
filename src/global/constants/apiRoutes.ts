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

  //address
  getAddresses: `/users/addresses`,
  getAddressesId: (id: string) => `/users/addresses/${id}`,

  // product
  getProducts: (page: number, limit: number) => `/products?page=${page}&limit=${limit}`,
  getProductDetail: (id: string) => `/products/${id}`,
  getFavoritesProduct: `/products/favorites/get`,

  //categories
  getCategories: `/categories`,

  //cart
  getCarts: `/carts`,
  getQuantityCart: `/carts/quantity_cart`,
  changeQuantity: `/carts`,

  //colors
  getColors: '/colors',
  getColorById: (id: string) => `/colors/${id}`,

  //sizes
  getSizes: '/sizes',
  getSizeById: (id: string) => `/sizes/${id}`,

  //order
  addToCart: 'order/addToCart/',

  // orders
  getOrders: `/orders/me`,
  getOrderById: (id: string) => `/orders/me/${id}`,

  //rating
  getRatingByProductId: (id: string, page: number, limit: number) =>
    `/ratings/${id}?page=${page}&limit=${limit}`,
  getRated: `/ratings/rated`,
  getNotYetRated: `/ratings/not_yet_rated`,

  //user
  getUsers: (page: number, limit: number) => `/users?page=${page}&limit=${limit}`,
  getUserById: (id: string) => `/users/get/${id}`,

  // checkout
  checkout: `/pay`,
  getInvoice: `/pay/get_invoice`,
  stripe: '/pay/stripe',

  // notifications
  getNotifications: (id: string) => `/notification/get/${id}`,
};
export default API_ROUTES;
