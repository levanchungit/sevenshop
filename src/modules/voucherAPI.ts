import { API_ROUTES } from 'global/constants';
import { axiosInstance } from './config/AxiosInstance';

const voucherAPI = {
  getVouchersUser() {
    return axiosInstance.get(API_ROUTES.getVouchersUser);
  },
  addVoucherUser(code: string) {
    return axiosInstance.post(API_ROUTES.addVoucherUser(code));
  },
};

export default voucherAPI;
