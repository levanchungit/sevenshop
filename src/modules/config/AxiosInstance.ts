import axios from 'axios';
import { TokenRefreshRequest, applyAuthTokenInterceptor } from 'react-native-axios-jwt';
import { API_URL } from 'global/config';
import { API_ROUTES } from 'global/constants';

export const axiosInstance = axios.create({
  baseURL: API_URL,
});

const requestRefresh: TokenRefreshRequest = async (refreshToken: string): Promise<string> => {
  const response = await axios.post(`${API_URL}${API_ROUTES.refresh_token}`, {
    refresh_token: refreshToken,
  });

  return response.data.access_token;
};

applyAuthTokenInterceptor(axiosInstance, {
  requestRefresh,
  header: 'Authorization',
  headerPrefix: 'Bearer ',
});
