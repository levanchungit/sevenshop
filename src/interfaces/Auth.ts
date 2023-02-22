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
