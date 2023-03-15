export * from './apiRoutes';

export const APP_ROUTES = {
  //Auth
  Login: 'Login',
  Register: 'Register',
  Main: 'Main',
  Detail: 'Detail',
  OTP: 'OTP',
  OTPForgot: 'OTPForgot',
  SetPassword: 'SetPassword',
  ForgotPassword: 'ForgotPassword',
  Rating: 'Rating',
  Address: 'Address',
  EditAddress: 'EditAddress',
  Cart: 'Cart',
  PaymentSuccess: 'PaymentSuccess',
  SelectVoucher: 'SelectVoucher',
  SetPasswordForgot: 'SetPasswordForgot',
};

export enum STATUS_PRODUCT {
  active = 'active',
  inactive = 'inactive',
}
