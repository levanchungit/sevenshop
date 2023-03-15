import axios from 'axios';
import { setAuthTokens } from 'react-native-axios-jwt';
import { API_URL } from 'global/config';
import { API_ROUTES } from 'global/constants';
import {
  CheckOTPPayload,
  RefreshTokenPayload,
  RegisterPayload,
  SignInPayload,
  ForgotPayload,
  ChangePasswordPayload,
  SetPasswordPayload,
} from 'interfaces/Auth';
import { axiosInstance } from './config/AxiosInstance';

const authAPI = {
  async login(payload: SignInPayload) {
    const response = await axios.post(API_URL + API_ROUTES.login, payload);
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
    const response = await axios.post(API_URL + API_ROUTES.register, payload);
    return response;
  },

  async forgotpassword(payload: ForgotPayload) {
    const response = await axios.post(API_URL + API_ROUTES.forgotPassword, payload);
    return response;
  },

  async changePassword(payload: ChangePasswordPayload) {
    const response = await axios.post(API_URL + API_ROUTES.changePassword, payload);
    return response;
  },

  async check_otp(payload: CheckOTPPayload) {
    const response = await axios.post(API_URL + API_ROUTES.check_otp, payload);
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


  async set_password(payload: SetPasswordPayload) {
    //header token
    const response = await axios.post(API_URL + API_ROUTES.set_password, payload);
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
  // async changePassword(payload: ChangePasswordPayload) {
  //   //header token
  //   const response = await axios.post(API_URL + API_ROUTES.changePassword, payload);
  //   try {
  //     await setAuthTokens({
  //       accessToken: response.data.access_token,
  //       refreshToken: response.data.refresh_token,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   return response;
  // },

  logout(payload: RefreshTokenPayload) {
    return axiosInstance.post(API_ROUTES.logout, payload);
  },

  refresh_token(payload: RefreshTokenPayload) {
    return axios.post(API_URL + API_ROUTES.refresh_token, payload);
  },

  me() {
    return axiosInstance.get(API_ROUTES.me);
  },

 
};

export default authAPI;
