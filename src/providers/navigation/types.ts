import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AddressesResult } from 'interfaces/Address';
import { Checkout } from 'interfaces/Checkout';
import { response_checkout } from 'interfaces/checkout_response';

export type AppStackNavigatorParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
  OTP: undefined;
  SetPassword: undefined;
  SetPasswordForgot: undefined;
  ForgotPassWord: undefined;
  Detail: {
    _id: string;
  };
  OTPForgot: undefined;
  SearchProduct: undefined;
  SearchKeywordProducts: undefined;
  Product: {
    keyword: string;
  };
  ProductFavorites: undefined;
  Profile: undefined;
  AccountSettings: undefined;
  AccountSecurity: undefined;
  Cart: undefined;
  Address: {
    typeUser: boolean;
  };
  EditAddress: {
    typeEdit: boolean;
    address?: AddressesResult;
  };
  VoucherScreen: undefined;
  SelectVoucher: undefined;
  Rating: undefined;
  PaymentMethodScreen: undefined;
  OrderDetail: {
    id_order: string;
  };
  CheckoutScreen: {
    address_id?: string;
    data: Checkout;
    payment_type?: string;
  };
  PaymentSuccess: {
    data_detail: response_checkout;
  };
  MyPurchaseScreen: undefined;
};

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Favorites: undefined;
  CheckoutScreen: undefined;
  PaymentSuccess: undefined;
  MyPurchase: undefined;
  OrderDetail: undefined;
  Notification?: {
    itemId?: string;
  };
  Profile: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<AppStackNavigatorParamList>;

export type DetailRouteProp = RouteProp<AppStackNavigatorParamList, 'Detail'>;
export type ProductRouteProp = RouteProp<AppStackNavigatorParamList, 'Product'>;

export type AddressRouteProp = RouteProp<AppStackNavigatorParamList, 'Address'>;

export type EditAddressRouteProp = RouteProp<AppStackNavigatorParamList, 'EditAddress'>;

export type PaymentSuccessRouteProp = RouteProp<AppStackNavigatorParamList, 'PaymentSuccess'>;

export type MainRouteProp = RouteProp<AppStackNavigatorParamList, 'Main'>;
export type OrderDetailRouteProp = RouteProp<AppStackNavigatorParamList, 'OrderDetail'>;

export type CheckoutRouteProp = RouteProp<AppStackNavigatorParamList, 'CheckoutScreen'>;

export type MainScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<AppStackNavigatorParamList>,
  BottomTabNavigationProp<BottomTabNavigatorParamList>
>;
