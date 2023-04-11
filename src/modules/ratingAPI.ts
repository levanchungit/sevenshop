import { API_ROUTES } from 'global/constants';
import { axiosInstance } from './config/AxiosInstance';

const ratingAPI = {
  getRated() {
    return axiosInstance.get(API_ROUTES.getRated);
  },
  getNotYetRated() {
    return axiosInstance.get(API_ROUTES.getNotYetRated);
  },
};

export default ratingAPI;
