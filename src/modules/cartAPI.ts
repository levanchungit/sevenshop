// import axios from 'axios';
import { API_ROUTES } from 'global/constants';
import { AddCartPayload } from 'interfaces/Cart';
import { axiosInstance } from './config/AxiosInstance';

const cartAPI = {
  getCarts() {
    return axiosInstance.get(API_ROUTES.getCarts);
  },
  addCart(data: AddCartPayload) {
    return axiosInstance.post(API_ROUTES.getCarts, data);
  },
};

export default cartAPI;
