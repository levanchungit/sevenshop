import { clearAuthTokens, setAuthTokens } from 'react-native-axios-jwt';
import { API_ROUTES } from 'global/constants';
import { TypeReturn } from 'interfaces/APIResponse';
import {
  CheckOTPPayload,
  RefreshTokenPayload,
  RegisterPayload,
  SetPasswordPayload,
  SignInPayload,
} from 'interfaces/Auth';
import { axiosInstance } from './config/AxiosInstance';

const authAPI = {
  async login(payload: SignInPayload) {
    const response = await axiosInstance.post(API_ROUTES.login, payload);

    try {
      await setAuthTokens({
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
      });
    } catch (error) {
      console.error(error);
    }
    return response;
  },

  async register(payload: RegisterPayload) {
    clearAuthTokens();
    return await axiosInstance.post(API_ROUTES.register, payload);
  },

  async check_otp(payload: CheckOTPPayload) {
    const response = await axiosInstance.post(API_ROUTES.check_otp, payload);

    try {
      await setAuthTokens({
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token || null,
      });
    } catch (error) {
      console.error(error);
    }
    return response;
  },

  async set_password(payload: SetPasswordPayload) {
    const response = await axiosInstance.post(API_ROUTES.set_password, payload);
    try {
      await setAuthTokens({
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
      });
    } catch (error) {
      console.error(error);
    }
    return response;
  },

  me() {
    return axiosInstance.get(API_ROUTES.me);
  },
  logout(payload: RefreshTokenPayload): TypeReturn<null> {
    return axiosInstance.post(API_ROUTES.logout, payload);
  },
  getProducts() {
    return axiosInstance.get(API_ROUTES.getProducts);
  },
};

export default authAPI;
