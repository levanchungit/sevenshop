import axios from 'axios';
import { API_URL } from 'global/config';
import { API_ROUTES } from 'global/constants';
import { axiosInstance } from './config/AxiosInstance';

const productAPI = {
  getProducts() {
    return axiosInstance.get(API_URL + API_ROUTES.getProducts);
  },

  getProductID(id: string) {
    return axios.get(API_URL + API_ROUTES.getProductDetail(id));
  },
};

export default productAPI;
