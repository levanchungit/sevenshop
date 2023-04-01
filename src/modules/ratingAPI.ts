import { API_ROUTES } from 'global/constants';
import { axiosInstance } from './config/AxiosInstance';

const ratingAPI = {
  getRatingsByProductId(id: string, page: number, limit: number) {
    return axiosInstance.get(API_ROUTES.getRatingByProductId(id, page, limit));
  },
  getRated() {
    return axiosInstance.get(API_ROUTES.getRated);
  },
  getNotYetRated() {
    return axiosInstance.get(API_ROUTES.getNotYetRated);
  },
};

export default ratingAPI;
