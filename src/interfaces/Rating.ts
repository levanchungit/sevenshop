import { IModify } from './Basic';

export type IRating = {
  user_id: string;
  size_id: string;
  color_id: string;
  images: string[];
  content: string;
  rating: number;
  modify: IModify;
  _id: string;
};

export interface IRatingByProductId {
  _id: string;
  product_id: string;
  ratings: IRating[];
}
