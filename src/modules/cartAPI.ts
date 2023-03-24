// import axios from 'axios';
import { API_ROUTES } from 'global/constants';
import { IAddCart } from 'interfaces/Cart';
import { axiosInstance } from './config/AxiosInstance';

const cartAPI = {
  getCarts() {
    return axiosInstance.get(API_ROUTES.getCarts);
  },
  async addCart(data: IAddCart) {
    console.log('cartAPI', data);
    const response = await axiosInstance.post(API_ROUTES.getCarts, data);
    console.log(response);
    return response;
  },
};

export default cartAPI;
