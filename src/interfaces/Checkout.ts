export type ProductCheckout = {
  product_id: string;
  quantity: number;
  size_id: string;
  color_id: string;
  name: string;
  price: number;
  price_sale: number;
  images: string[];
  total_before_discount: number;
  total_discount: number;
  total: number;
};
export type AddressCheckout = {
  address: string;
  full_name: string;
  phone: string;
  default_address: boolean;
  _id: string;
};

export interface Checkout {
  products: ProductCheckout[];
  address: AddressCheckout;
  total_invoice_before_discount: number;
  total_invoice_discount: number;
  total_invoice: number;
  payment_type: string;
  note: string;
  voucher_id: string;
}

export type ProductInvoice = {
  product_id: string;
  quantity: number;
  size_id: string;
  color_id: string;
  name: string;
  price: number;
  price_sale: number;
  images: string[];
};

export interface getInvoice {
  products: ProductInvoice[];
}
