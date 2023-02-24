export type SignInPayload = {
  email: string;
  password: string;
};

export type RefreshTokenPayload = {
  refresh_token: string | null | undefined;
};

export type GetMeSuccessData = {
  full_name: string;
  email: string;
  avatar: string;
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
