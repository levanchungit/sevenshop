import { API_ROUTES } from 'global/constants';
import { axiosInstance } from './config/AxiosInstance';

const sizeAPI = {
  getSizes() {
    const response = axiosInstance.get(API_ROUTES.getSizes);
    return response;
  },
  getSizeById(id: string) {
    const response = axiosInstance.get(API_ROUTES.getSizeById(id));
    return response;
  },
};

export default sizeAPI;
