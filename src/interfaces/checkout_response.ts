export type response = {
  _id: string;
  created_at: string;
  payment_type: string;
};

export interface response_checkout {
  results: response;
}
