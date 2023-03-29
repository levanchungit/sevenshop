export type AddressesPayload = {
  address: string;
  full_name: string;
  phone: string;
  // type: string;
  default_address: boolean;
};

export type AddressesResult = {
  address: string;
  full_name: string;
  phone: string;
  default_address: boolean;
  _id: string;
};

export interface IAddresses {
  total: number;
  results: AddressesResult[];
}
