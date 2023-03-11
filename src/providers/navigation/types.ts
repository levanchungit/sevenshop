import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppStackNavigatorParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
  OTP: undefined;
  SetPassWord: undefined;
  SetPassWordForgot: undefined;
  ForgotPassWord: undefined;
  Details: {
    name: string;
    description: string;
    price: number;
    image: [];
  };
  OTPForgot: undefined;
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

export type DetailRouteProp = RouteProp<AppStackNavigatorParamList, 'Details'>;

export type EditAddressRouteProp = RouteProp<AppStackNavigatorParamList, 'EditAddress'>;

export type MainScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<AppStackNavigatorParamList>,
  BottomTabNavigationProp<BottomTabNavigatorParamList>
>;
