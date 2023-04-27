export const API_ROUTES = {
  // auth
  login: `/auth/login`,
  loginGoogle: `/auth/login_gmail`,
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
  updateFavorite: (id: string) => `/products/favorites/${id}`,
  getProductsFlashSale: `/products/flash_sale/get`,
  getProductsCategory: (limit: number, category: string) =>
    `/products/categories/get?limit=${limit}&category=${category}`,
  addRecentlyProduct: (id: string) => `/products/recently/${id}`,
  getRecentlyProduct: (page: number, limit: number) =>
    `products/for_you/get?page=${page}&limit=${limit}`,

  //categories
  getCategories: `/categories`,

  //cart
  getCarts: `/carts`,
  getQuantityCart: `/carts/quantity_cart`,
  changeQuantity: `/carts`,
  updateColorSize: (product_id: string, color_id: string, size_id: string) =>
    `/carts/change_size_color?product_id=${product_id}&color_id=${color_id}&size_id=${size_id}`,

  //colors
  getColors: '/colors',
  getColorById: (id: string) => `/colors/${id}`,

  //sizes
  getSizes: '/sizes',
  getSizeById: (id: string) => `/sizes/${id}`,

  //order
  addToCart: 'order/addToCart/',

  // orders
  getOrders: `/orders/me?limit=50`,
  getOrderById: (id: string) => `/orders/me/${id}`,

  //rating
  getRated: `/ratings/rated`,
  getNotYetRated: `/ratings/not_yet_rated`,
  addRating: `/ratings`,

  //user
  getUsers: (page: number, limit: number) => `/users?page=${page}&limit=${limit}`,
  getUserById: (id: string) => `/users/get/${id}`,
  updateSelfUser: `/users/get`,
  // checkout
  checkout: `/pay`,
  getInvoice: `/pay/get_invoice`,
  stripe: '/pay/intents',

  // notifications
  getNotifications: (id: string) => `/notification/get/${id}?limit=5&page1`,

  //voucher
  getVouchersUser: `/voucher/get_vouchers`,
  addVoucherUser: (code: string) => `/voucher/add_voucher/${code}`,
};
export default API_ROUTES;
