// import { API_URL } from 'global/config';
import { API_ROUTES } from 'global/constants';
import { Checkout } from 'interfaces/Checkout';
import { axiosInstance } from './config/AxiosInstance';

const checkoutAPI = {
  async checkout(data: Checkout) {
    const response = await axiosInstance.post(API_ROUTES.checkout, data);
    return response;
  },
};

export default checkoutAPI;
