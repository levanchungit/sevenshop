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

export type GetProductSuccessData = {
  _id: string;
  name: string;
  price: number;
  description: string;
  storage_quantity: number;
  images: [];
  properties_type: [];
  categories_type: number;
};

export type GetProductData = {
  name: string;
  price: number;
  quantity: number;
};
