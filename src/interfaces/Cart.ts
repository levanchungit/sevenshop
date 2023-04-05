export type AddCartPayload = {
  size_id: string;
  color_id: string;
  quantity: number;
  product_id: string;
};

export interface IColor {
  _id: string;
  name: string;
}
export interface ISize {
  _id: string;
  size: string;
}

export type IData = {
  product_id: string;
  quantity: number;
  size: ISize;
  color: IColor;
  name: string;
  price: number;
  price_sale: number;
  images: string[];
};

export interface ICart {
  data: IData[];
}

export interface ChangeQuantityCart {
  product_id: string;
  quantity: number;
  size_id: string;
  color_id: string;
}
