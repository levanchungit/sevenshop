export type IModify = {
  _id: string;
  status: string;
  modified_at: string;
  modified_by: number;
};

export type IProductPurchase = {
  product_id: string;
  quantity: number;
  size_id: string;
  color_id: number;
  _id: string;
};

export interface IMyPurchases {
  _id: string;
  user_id: string;
  products: IProductPurchase[];
  total_price: number;
  total_discount: number;
  total_before_discount: number;
  payment_type: string;
  status: string;
  voucher_id: string;
  created_at: string;
  created_by: string;
  modify: IModify[];
}
