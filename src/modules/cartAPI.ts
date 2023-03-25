import { API_ROUTES } from 'global/constants';
import { AddCartPayload } from 'interfaces/Cart';
import { axiosInstance } from './config/AxiosInstance';

const cartAPI = {
  addCart(data: AddCartPayload) {
    return axiosInstance.post(API_ROUTES.getCarts, data);
  },
  async getCarts() {
    const response = await axiosInstance.get(API_ROUTES.getCarts);
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
};

export default cartAPI;
