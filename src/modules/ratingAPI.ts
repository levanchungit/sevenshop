import { API_ROUTES } from 'global/constants';
import { RatingPayload } from 'interfaces/Rating';
import { axiosInstance } from './config/AxiosInstance';

const ratingAPI = {
  getRated() {
    return axiosInstance.get(API_ROUTES.getRated);
  },
  getNotYetRated() {
    return axiosInstance.get(API_ROUTES.getNotYetRated);
  },
  addRating(rating: RatingPayload) {
    return axiosInstance.post(API_ROUTES.addRating, rating);
  },
};

export default ratingAPI;
