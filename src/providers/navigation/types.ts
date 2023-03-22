import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppStackNavigatorParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
  OTP: undefined;
  SetPassword: undefined;
  SetPasswordForgot: undefined;
  ForgotPassWord: undefined;
  Detail: {
    id_product?: string;
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
  Address: undefined;
  EditAddress: {
    typeEdit: boolean;
    address?: {
      id: number;
      full_name: string;
      phone: number;
      address: string;
      type: string;
      isDefault: boolean;
    };
  };
  Voucher: undefined;
  SelectVoucher: undefined;
  Rating: undefined;
  PaymentMethodScreen: undefined;
  OrderDetail: undefined;
  CheckoutScreen?: {
    address_id?: number;
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
    itemId?: number;
  };
  Profile: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<AppStackNavigatorParamList>;

export type DetailRouteProp = RouteProp<AppStackNavigatorParamList, 'Detail'>;

export type EditAddressRouteProp = RouteProp<AppStackNavigatorParamList, 'EditAddress'>;

export type PaymentSuccessRouteProp = RouteProp<AppStackNavigatorParamList, 'PaymentSuccess'>;

export type MainScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<AppStackNavigatorParamList>,
  BottomTabNavigationProp<BottomTabNavigatorParamList>
>;
