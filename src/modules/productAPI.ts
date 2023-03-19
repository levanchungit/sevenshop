import { API_URL } from 'global/config';
import { API_ROUTES } from 'global/constants';
import { axiosInstance } from './config/AxiosInstance';

const productAPI = {
  getProducts() {
    const response = axiosInstance.get(API_URL + API_ROUTES.getProducts);
    return response;
  },

  async getProductID(id: string) {
    const response = await axiosInstance.get(API_ROUTES.getProductDetail(id));
    return response.data;
  },
};

export default productAPI;
