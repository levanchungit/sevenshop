import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AddressScreen,
  CartScreen,
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


import ProductScreen from 'screens/ProductScreen';

import SearchKeywordproductsScreen from 'screens/SearchKeywordproducts';
import SearchProductScreen from 'screens/SearchProductScreen';

import SetPassWordScreen from 'screens/SetPasswordScreen';
import { AppStackNavigatorParamList } from './types';

const AppStack = createNativeStackNavigator<AppStackNavigatorParamList>();
const { Navigator, Screen } = AppStack;

const StackNavigator = () => {
  return (
    <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
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
      <Screen name="Cart" component={CartScreen} />
      <Screen name="PaymentSuccess" component={PaymentSuccess} />
      <Screen name="SelectVoucher" component={SelectVoucherScreen} />
      <Screen name="SetPasswordForgot" component={SetPasswordForgotScreen} />
      <Screen name="SearchProduct" component={SearchProductScreen} />
      <Screen name="SearchKeywordproducts" component={SearchKeywordproductsScreen} />
      <Screen name="Product" component={ProductScreen} />
    </Navigator>
  );
};

export default StackNavigator;
