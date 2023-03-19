import { STATUS_PRODUCT } from 'global/constants';
import { address, color, review, size, voucher } from 'interfaces/Auth';
import { IProduct } from './../interfaces/Product';

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

export const DATA: IProduct[] = [
  {
    _id: '64171cdba0ebec4e7057c05f',
    name: 'DATA MOCK',
    price: 1290000,
    price_sale: 111,
    description:
      'Quần xếp li phía trước. Có hai túi phía trước và một túi may viền phía sau. Cài khóa kéo và khuy phía trước.',
    images: [
      'https://res.cloudinary.com/dzhlsdyqv/image/upload/v1679236285/SevenShop/psteycjolcomioj9lo4o.jpg',
      'https://res.cloudinary.com/dzhlsdyqv/image/upload/v1679236286/SevenShop/i13ksuv2itufiejhawli.jpg',
      'https://res.cloudinary.com/dzhlsdyqv/image/upload/v1679236286/SevenShop/o0p6eg1l6luacyu0y42h.jpg',
      'https://res.cloudinary.com/dzhlsdyqv/image/upload/v1679236287/SevenShop/drkki7tykzhv11wtrlmt.jpg',
      'https://res.cloudinary.com/dzhlsdyqv/image/upload/v1679236287/SevenShop/knmfkpwpiaxhyzboub4v.jpg',
    ],
    stock: [
      {
        size_id: '641017d86d6e461901c6bb60',
        color_id: '6410176f6d6e461901c6bb15',
        quantity: 0,
      },
      {
        size_id: '641017d86d6e461901c6bb60',
        color_id: '6410178a6d6e461901c6bb2e',
        quantity: 0,
      },
    ],
    status: STATUS_PRODUCT.active,
    category_ids: ['640fdb4da2a095a3e667d645'],
    color_ids: ['6410176f6d6e461901c6bb15', '6410178a6d6e461901c6bb2e', '641017a76d6e461901c6bb4a'],
    size_ids: ['641017d86d6e461901c6bb60', '641017dd6d6e461901c6bb6e', '641017e36d6e461901c6bb7c'],
    created_at: '2023-03-19T14:31:55+00:00',
    created_by: 'levanchunq123@gmail.com',
    modify: [
      {
        action: 'Create by levanchunq123@gmail.com',
        date: '2023-03-19T14:31:55+00:00',
      },
    ],
    reviews: [],
  },
];

export const DATA5: address[] = [
  {
    id: 1,
    full_name: 'Trần Trọng Đăng Khoa',
    phone: 931739042,
    address: '13 Lô C Chung cư Trần Quốc Thảo, P.4, Q.3, TP.HCM',
    type: 'work',
    isDefault: true,
  },
  {
    id: 2,
    full_name: 'Lê Văn Chung',
    phone: 931739042,
    address: '13 Lô C Chung cư Trần Quốc Thảo, P.4, Q.3, TP.HCM',
    type: 'work',
    isDefault: false,
  },
  {
    id: 3,
    full_name: 'Lương Quốc Duy',
    phone: 931739042,
    address: '13 Lô C Chung cư Trần Quốc Thảo, P.4, Q.3, TP.HCM',
    type: 'home',
    isDefault: false,
  },
  {
    id: 4,
    full_name: 'Trần Ngọc Thủy',
    phone: 931739042,
    address: '13 Lô C Chung cư Trần Quốc Thảo, P.4, Q.3, TP.HCM',
    type: 'home',
    isDefault: false,
  },
  {
    id: 5,
    full_name: 'Đặng Trương Lương',
    phone: 931739042,
    address: '13 Lô C Chung cư Trần Quốc Thảo, P.4, Q.3, TP.HCM',
    type: 'work',
    isDefault: false,
  },
];
export const DATA6: voucher[] = [
  {
    id: 1,
    name: 'Giảm 20%',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '25/03/2002 12:00AM',
    image: 'https://picsum.photos/200/300?random=1',
    condition:
      'Quam pellentesque nec nam aliquam sem et tortor consequat id. Id aliquet lectus proin nibh nisl.',
  },
  {
    id: 2,
    name: 'Giảm 30%',
    description:
      'Malesuada pellentesque elit eget gravida. Lectus quam id leo in vitae turpis massa sed elementum.',
    time: '25/03/2002 12:00AM',
    image: 'https://picsum.photos/200/300?random=2',
    condition:
      'Quam pellentesque nec nam aliquam sem et tortor consequat id. Id aliquet lectus proin nibh nisl.',
  },
  {
    id: 3,
    name: 'Giảm 40%',
    description:
      'Malesuada pellentesque elit eget gravida. Lectus quam id leo in vitae turpis massa sed elementum.',
    time: '25/03/2002 12:00AM',
    image: 'https://picsum.photos/200/300?random=3',
    condition:
      'Quam pellentesque nec nam aliquam sem et tortor consequat id. Id aliquet lectus proin nibh nisl.',
  },
];
