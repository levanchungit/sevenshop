import { API_ROUTES } from 'global/constants';
import { axiosInstance } from './config/AxiosInstance';

const ratingAPI = {
  getRatingsByProductId(id: string, page: number, limit: number) {
    return axiosInstance.get(API_ROUTES.getRatingByProductId(id, page, limit));
  },
};

export default ratingAPI;
