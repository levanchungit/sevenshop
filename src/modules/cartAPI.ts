// import axios from 'axios';
import { API_ROUTES } from 'global/constants';
import { axiosInstance } from './config/AxiosInstance';

const cartAPI = {
  getCarts() {
    return axiosInstance.get(API_ROUTES.getCarts);
  },
};

export default cartAPI;
