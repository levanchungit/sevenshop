// import { API_URL } from 'global/config';
import { API_ROUTES } from 'global/constants';
import { axiosInstance } from './config/AxiosInstance';

const notificationAPI = {
  async getNotification(id: string) {
    const response = await axiosInstance.get(API_ROUTES.getNotifications(id));
    return response;
  },
};

export default notificationAPI;
