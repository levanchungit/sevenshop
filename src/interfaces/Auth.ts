export type SignInPayload = {
  email: string;
  password: string;
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
  password_new: string;
};

export type RefreshTokenPayload = {
  refresh_token: string | null | undefined;
};

export type GetMeSuccessData = {
  message: string;
  access_token: string;
  refresh_token: string;
};

export type color = {
  title: string;
  data: string;
};

export type size = {
  title: string;
};

export type Item = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  type: {
    size: size;
    color: color;
  };
  selled: number;
  categories: number;
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
