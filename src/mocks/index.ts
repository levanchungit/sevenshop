// import { Item } from 'screens/MainScreen';

export type Item = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  selled: number;
  categories: number;
};

export const DATA: Item[] = [
  {
    id: '1',
    name: 'Michael Scottshhhhhhhhhsdddddddddddđ',
    price: 100,
    image:
      'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lvse-monogram-degrade-crewneck--HKN44WUSO904_PM2_Front%20view.png?wid=656&hei=656',
    category: '123',
    selled: 200,
    categories: 1,
  },
  {
    id: '2',
    name: 'Michael Scott',
    price: 100,
    image:
      'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656',
    category: '123',
    selled: 200,
    categories: 1,
  },
  {
    id: '3',
    name: 'Michael Scott',
    price: 100,
    image:
      'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-signature-cardigan--HON46WU34MU1_PM2_Front%20view.png?wid=656&hei=656',
    category: '123',
    selled: 200,
    categories: 1,
  },
  {
    id: '4',
    name: 'Michael Scott',
    price: 100,
    image:
      'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-hybrid-nylon-hooded-tracksuit--HON12WZLW304_PM2_Front%20view.png?wid=656&hei=656',
    category: '123',
    selled: 200,
    categories: 2,
  },
  {
    id: '5',
    name: 'Michael Scott',
    price: 100,
    image:
      'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-music-line-embroidered-crewneck--HOY03WIHN900_PM2_Front%20view.png?wid=656&hei=656',
    category: '123',
    selled: 200,
    categories: 2,
  },
  {
    id: '6',
    name: 'Michael Scott',
    price: 100,
    image:
      'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-zip-through-hoodie--HOY04WSQ5620_PM2_Front%20view.png?wid=656&hei=656',
    category: '123',
    selled: 200,
    categories: 2,
  },
];

export type color = {
  title: string;
  data: string;
};

export const DATA2: color[] = [
  {
    title: 'Cyan',
    data: 'cyan.500',
  },
  {
    title: 'Yellow',
    data: 'yellow.100',
  },
  {
    title: 'Violet',
    data: 'violet.200',
  },
  {
    title: 'red',
    data: 'red.200',
  },
  {
    title: 'blue',
    data: 'blue.200',
  },
  {
    title: 'white',
    data: 'white',
  },
  {
    title: 'green',
    data: 'green.300',
  },
  {
    title: 'black',
    data: 'black',
  },
];

export type review = {
  name: string;
  rating: number;
  comment: string;
  time: string;
};

export const DATA3: review[] = [
  {
    name: 'Lê Văn Chung',
    rating: 5,
    comment:
      'Dùng oke lắm luôn mọi người ạ. Shop giao hàng nhanh, đóng gói cẩn thận.Tư vấn siu nhiệt tình luôn. Cho shop 5 sao',
    time: '2015-02-01 9:00PM',
  },
  {
    name: 'Trần Trọng Đăng Khoa',
    rating: 5,
    comment: 'Very good product',
    time: '2015-02-01 9:00PM',
  },
];

export type size = {
  title: string;
};

export const DATA4: size[] = [
  {
    title: 'S',
  },
  {
    title: 'M',
  },
  {
    title: 'L',
  },
  {
    title: 'XL',
  },
  {
    title: 'XXL',
  },
];

export type color = {
  title: string;
  data: string;
};

export const DATA2: color[] = [
  {
    title: 'Cyan',
    data: 'cyan.500',
  },
  {
    title: 'Yellow',
    data: 'yellow.100',
  },
  {
    title: 'Violet',
    data: 'violet.200',
  },
  {
    title: 'red',
    data: 'red.200',
  },
  {
    title: 'blue',
    data: 'blue.200',
  },
  {
    title: 'white',
    data: 'white',
  },
  {
    title: 'green',
    data: 'green.300',
  },
  {
    title: 'black',
    data: 'black',
  },
];

export type review = {
  name: string;
  rating: number;
  comment: string;
  time: string;
};

export const DATA3: review[] = [
  {
    name: 'Lê Văn Chung',
    rating: 5,
    comment:
      'Dùng oke lắm luôn mọi người ạ. Shop giao hàng nhanh, đóng gói cẩn thận.Tư vấn siu nhiệt tình luôn. Cho shop 5 sao',
    time: '2015-02-01 9:00PM',
  },
  {
    name: 'Trần Trọng Đăng Khoa',
    rating: 5,
    comment: 'Very good product',
    time: '2015-02-01 9:00PM',
  },
];

export type size = {
  title: string;
};

export const DATA4: size[] = [
  {
    title: 'S',
  },
  {
    title: 'M',
  },
  {
    title: 'L',
  },
  {
    title: 'XL',
  },
  {
    title: 'XXL',
  },
];
