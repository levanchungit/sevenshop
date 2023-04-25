export type SignInPayload = {
  email: string;
  password: string;
  device_id: string;
};

export type SignInGmailPayload = {
  email: string;
  full_name: string;
  avatar: string;
  device_id: string;
};

export type RegisterPayload = {
  email: string;
};

export type CheckOTPPayload = {
  id: string;
  otp: string;
};

export type ForgotPayload = {
  email: string;
};

export type SetPasswordPayload = {
  password: string;
};

export type ChangePasswordPayload = {
  password: string;
  new_password: string;
};

export type RefreshTokenPayload = {
  refresh_token: string | null | undefined;
};

export type GetMeSuccessData = {
  _id: string;
  full_name: string;
  email: string;
  avatar: string;
  address: [];
  phone: string;
  gender: string;
  birthday: string;
  membership_type: string;
  language: number;
  product_favourites: [];
  recent_products: [];
};

export type AddToCart = {
  product_id: string;
  color: number;
  size: number;
  quantity: number;
  image: string;
};

export type address = {
  id: number;
  full_name: string;
  phone: number;
  address: string;
  type: string;
  isDefault: boolean;
};

export type review = {
  name: string;
  rating: number;
  comment: string;
  time: string;
};

export type voucher = {
  id: number;
  name: string;
  description: string;
  time: string;
  image: string;
  condition: string;
};

export type GetProductData = {
  name: string;
  price: number;
  quantity: number;
};
