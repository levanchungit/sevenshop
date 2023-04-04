import { IModify } from './Basic';
import { IColor } from './Color';
import { ISize } from './Size';

export type IRating = {
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
};
