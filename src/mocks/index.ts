import { address, review, voucher } from 'interfaces/Auth';

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
