import { IModify } from './Basic';

export interface ICategory {
  _id: string;
  name: string;
  description: string;
  image: string;
  product_ids: [];
  created_at: string;
  created_by: string;
  modify: IModify[];
}

export interface CreateCmsCategoryPayload {
  name: string;
  description: string;
}

export interface EditCmsCategoryPayload extends CreateCmsCategoryPayload {
  _id: string;
}
