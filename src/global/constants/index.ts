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

export const URL_IMG_AUTH =
  'https://res.cloudinary.com/dzhlsdyqv/image/upload/v1679739864/Image/Frame_207_ljt2hf.png';

export enum STATUS_PRODUCT {
  active = 'active',
  inactive = 'inactive',
}

export enum PAYMENT_TYPE {
  cod = 'cod',
  momo = 'momo',
  bank = 'bank',
}
