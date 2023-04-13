import { API_ROUTES } from 'global/constants';
import { AddCartPayload } from 'interfaces/Cart';
import { axiosInstance } from './config/AxiosInstance';

const cartAPI = {
  async addCart(data: AddCartPayload) {
    return await axiosInstance.post(API_ROUTES.getCarts, data);
  },
  async getCarts() {
    const response = await axiosInstance.get(API_ROUTES.getCarts);
    return response;
  },
  async getQuantityCart() {
    const response = await axiosInstance.get(API_ROUTES.getQuantityCart);
    return response;
  },

  async ChangeQuantity(product_id: string, quantity: number, size_id: string, color_id: string) {
    const response = await axiosInstance.put(API_ROUTES.changeQuantity, {
      product_id,
      quantity,
      size_id,
      color_id,
    });
    return response;
  },

  async checkoutStripe(data: any) {
    return await axiosInstance.post(API_ROUTES.stripe, data);
  },
};

export default cartAPI;
