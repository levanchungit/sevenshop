export type AddressesPayload = {
  address: string;
  full_name: string;
  phone: string;
  // type: string;
  default_address: boolean;
};

export interface IAddresses {
  total: number;
  results: {
    address: string;
    full_name: string;
    phone: string;
    default_address: true;
    _id: string;
  };
}
