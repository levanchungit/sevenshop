// import { API_URL } from 'global/config';
import { API_ROUTES } from 'global/constants';
import { Addsearch } from 'interfaces/Search';
import { axiosInstance } from './config/AxiosInstance';
// const colors = ['6438671a23fa76f73a5c0808', '643865f923fa76f73a5c06d7'];
// const color = colors.map((color) => `colors=${color}`).join('&');
const searchAPI = {
  getKeywordsearch() {
    return axiosInstance.get(API_ROUTES.getKeywordsearch);
  },

  async addSearch(data: Addsearch) {
    return await axiosInstance.post(API_ROUTES.addKeywordSearch, data);
  },

  async getSearchProducts(page: number, limit: number, keyword: string) {
    return await axiosInstance.get(API_ROUTES.getSearchProducts(page, limit, keyword));
  },

  async getFillterProducts(
    categories: string,
    sizes: string,
    colors: string,
    price_min: number,
    price_max: number
  ) {
    return await axiosInstance.get(
      API_ROUTES.getFilterProducts(categories, sizes, colors, price_min, price_max)
    );
  },
};

export default searchAPI;
