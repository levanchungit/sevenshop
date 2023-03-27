import { API_ROUTES } from 'global/constants';
import { AddressesPayload } from 'interfaces/Address';
import { axiosInstance } from './config/AxiosInstance';

const addressAPI = {
  getAddresses() {
    return axiosInstance.get(API_ROUTES.getAddresses);
  },
  async addAddress(data: AddressesPayload) {
    return await axiosInstance.post(API_ROUTES.getAddresses, data);
  },
  async editAddress(data: AddressesPayload, id: string) {
    return await axiosInstance.put(API_ROUTES.getAddressesId(id), data);
  },
};

export default addressAPI;
