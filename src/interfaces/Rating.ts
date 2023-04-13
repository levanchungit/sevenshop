import { IModify } from './Basic';
import { IColor } from './Color';
import { ISize } from './Size';

export type RatingPayload = {
  product_id: string;
  color_id: string;
  size_id: string;
  images: string[];
  content: string;
  rating: number;
};

export interface IRating {
  user_id: {
    _id: string;
    full_name: string;
    avatar: string;
    email: string;
  };
  size_id: ISize;
  color_id: IColor;
  images: string[];
  content: string;
  rating: number;
  modify: IModify;
  _id: string;
}

export interface INotYetRated {
  product_id: string;
  product_image: string;
  product_name: string;
  size_id: string;
  size_name: string;
  color_id: string;
  color_name: string;
  quantity: number;
}
