import { API_ROUTES } from 'global/constants';
import { axiosInstance } from './config/AxiosInstance';

const colorAPI = {
  getColors() {
    const response = axiosInstance.get(API_ROUTES.getColors);
    return response;
  },
};

export default colorAPI;
