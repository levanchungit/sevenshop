import { IModify } from './Basic';

export interface ISize {
  _id?: string;
  name: string;
  size: string;
  created_at: string;
  created_by: string;
  modify: IModify[];
}
