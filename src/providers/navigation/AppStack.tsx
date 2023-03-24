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
  ProductScreen,
  ProductFavoritesScreen,
  ProfileScreen,
  SearchProductScreen,
  AccountSettingScreen,
  AccountSecurityScreen,
  Cart,
  CheckoutScreen,
  OrderDetailScreen,
  MyPurchaseScreen,
  PaymentMethodScreen,
} from 'screens';
import { AppStackNavigatorParamList } from './types';
const AppStack = createNativeStackNavigator<AppStackNavigatorParamList>();
const { Navigator, Screen } = AppStack;

const StackNavigator = () => {
  return (
    <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Screen name="MyPurchaseScreen" component={MyPurchaseScreen} />
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
      <Screen name="SelectVoucher" component={SelectVoucherScreen} />
      <Screen name="SetPasswordForgot" component={SetPasswordForgotScreen} />
      <Screen name="SearchProduct" component={SearchProductScreen} />
      <Screen name="Product" component={ProductScreen} />
      <Screen name="ProductFavorites" component={ProductFavoritesScreen} />
      <Screen name="Profile" component={ProfileScreen} />
      <Screen name="AccountSettings" component={AccountSettingScreen} />
      <Screen name="AccountSecurity" component={AccountSecurityScreen} />
      <Screen name="PaymentSuccess" component={PaymentSuccess} />
      <Screen name="OrderDetail" component={OrderDetailScreen} />
    </Navigator>
  );
};

export default StackNavigator;
