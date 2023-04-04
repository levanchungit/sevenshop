import { STATUS_PRODUCT } from 'global/constants';
import { IModify } from './Basic';
import { IColor } from './Color';
import { IRating } from './Rating';
import { ISize } from './Size';

export type IStock = {
  size_id: { _id: string; size: string };
  color_id: { _id: string; code: string };
  quantity: number;
  _id: string;
};

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  price_sale: number;
  description: string;
  images: string[];
  stock: IStock[];
  status: STATUS_PRODUCT;
  category_ids: string[];
  color_ids: IColor[];
  size_ids: ISize[];
  created_at: string;
  created_by: string;
  modify: IModify[];
  ratings: IRating[];
  average_rating: 4;
  isFavorite: boolean;
}

export interface IProductFavorites {
  _id: string;
  name: string;
  price: number;
  images: string[];
}
