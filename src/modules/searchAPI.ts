// import { API_URL } from 'global/config';
import { API_ROUTES } from 'global/constants';
import { axiosInstance } from './config/AxiosInstance';

const searchAPI = {
  getKeywordsearch() {
    return axiosInstance.get(API_ROUTES.getKeywordsearch);
  },

  async addKeywordsearchKeywordsearch(keyword: string) {
    const response = await axiosInstance.put(API_ROUTES.changeQuantity, {
      keyword,
    });
    return response;
  },
};

export default searchAPI;
