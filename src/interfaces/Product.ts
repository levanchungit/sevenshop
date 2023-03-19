import { STATUS_PRODUCT } from 'global/constants';
import { review } from './Auth';
import { IModify } from './Basic';

export type IStock = {
  size_id: string;
  color_id: string;
  quantity: number;
};

export interface IProduct {
  _id?: string;
  name: string;
  price: number;
  price_sale: number;
  description: string;
  images: string[];
  stock: IStock[];
  status: STATUS_PRODUCT;
  category_ids: string[];
  color_ids: string[];
  size_ids: string[];
  created_at: string;
  created_by: string;
  modify: IModify[];
  reviews: review[];
}
