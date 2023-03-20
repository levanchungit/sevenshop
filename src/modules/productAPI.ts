import { API_URL } from 'global/config';
import { API_ROUTES } from 'global/constants';
import { axiosInstance } from './config/AxiosInstance';

const productAPI = {
  getProducts(limit: number) {
    return axiosInstance.get(API_ROUTES.getProducts(limit));
  },

  async getProductID(id: string) {
    const response = await axiosInstance.get(API_ROUTES.getProductDetail(id));
    return response.data;
  },
};

export default productAPI;
