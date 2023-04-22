export interface IKey {
  _id: string;
  created_at: Date;
  keyword: string;
}

export type Addsearch = {
  keyword: string;
};

export interface IFillter {
  _id: string;
  name: string;
  price: number;
  price_sale: number;
  images: string[];
}
