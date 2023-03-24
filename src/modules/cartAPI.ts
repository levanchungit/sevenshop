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
};

export default cartAPI;
