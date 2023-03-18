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
  Detail: undefined;
  OTPForgot: undefined;
  SearchProduct: undefined;
  SearchKeywordproducts: undefined;
  Product: undefined;
  ProductFavorites: undefined;
  Profile: undefined;
  AccountSettings: undefined;
  AccountSecurity: undefined;
  Cart: undefined;
  PaymentSuccess: undefined;
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
  CheckoutScreen: undefined;
  MypurchaseScreen: undefined;
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

export type MainScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<AppStackNavigatorParamList>,
  BottomTabNavigationProp<BottomTabNavigatorParamList>
>;
