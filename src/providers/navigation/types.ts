import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AddressesResult } from 'interfaces/Address';
import { Checkout } from 'interfaces/Checkout';

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
  Product: undefined;
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
    mutate: Function;
  };
  Voucher: undefined;
  SelectVoucher: undefined;
  Rating: undefined;
  PaymentMethodScreen: undefined;
  OrderDetail: {
    id_order: string;
  };
  CheckoutScreen: {
    address_id?: string;
    data: Checkout;
  };
  PaymentSuccess: {
    id_order: string;
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
