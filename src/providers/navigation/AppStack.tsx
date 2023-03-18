import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AddressScreen,
  DetailScreen,
  EditAddressScreen,
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  OTPForgotScreen,
  OTPScreen,
  PaymentSuccess,
  RatingScreen,
  RegisterScreen,
  SelectVoucherScreen,
  SetPasswordForgotScreen,
  SetPasswordScreen,
} from 'screens';
import Cart from 'screens/CartScreen';
import CheckoutScreen from 'screens/CheckoutScreen';
import MyPurchaseScreen from 'screens/MyPurchaseScreen';
import OrderDetailScreen from 'screens/OrderDetailScreen';
import PaymentMethodScreen from 'screens/PaymentMethodScreen';
import { AppStackNavigatorParamList } from './types';

const AppStack = createNativeStackNavigator<AppStackNavigatorParamList>();
const { Navigator, Screen } = AppStack;

const StackNavigator = () => {
  return (
    <Navigator initialRouteName="MypurchaseScreen" screenOptions={{ headerShown: false }}>
      <Screen name="PaymentSuccess" component={PaymentSuccess} />
      <Screen name="OrderDetail" component={OrderDetailScreen} />
      <Screen name="MypurchaseScreen" component={MyPurchaseScreen} />
      <Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Screen name="Login" component={LoginScreen} />
      <Screen
        name="Main"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
        }}
      />
      <Screen name="Detail" component={DetailScreen} />
      <Screen name="Register" component={RegisterScreen} />
      <Screen name="OTP" component={OTPScreen} />
      <Screen name="OTPForgot" component={OTPForgotScreen} />
      <Screen name="SetPassword" component={SetPasswordScreen} />
      <Screen name="ForgotPassWord" component={ForgotPasswordScreen} />
      <Screen name="Rating" component={RatingScreen} />
      <Screen name="Address" component={AddressScreen} />
      <Screen name="EditAddress" component={EditAddressScreen} />
      <Screen name="Cart" component={Cart} />
      <Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />
      <Screen name="PaymentSuccess" component={PaymentSuccess} />
      <Screen name="SelectVoucher" component={SelectVoucherScreen} />
      <Screen name="SetPasswordForgot" component={SetPasswordForgotScreen} />
    </Navigator>
  );
};

export default StackNavigator;
