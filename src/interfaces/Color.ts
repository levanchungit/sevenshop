import { IModify } from './Basic';

export interface IColor {
  _id: string;
  name: string;
  code: string;
  created_at: string;
  created_by: string;
  modify: IModify[];
}
