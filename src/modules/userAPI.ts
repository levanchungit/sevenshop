import { API_ROUTES } from 'global/constants';
import { axiosInstance } from './config/AxiosInstance';

const userAPI = {
  getUsers(page: number, limit: number) {
    return axiosInstance.get(API_ROUTES.getUsers(page, limit));
  },
  getUserById(id: string) {
    return axiosInstance.get(API_ROUTES.getUserById(id));
  },
};

export default userAPI;
