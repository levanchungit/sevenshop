import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AccountSecurityScreen,
  AccountSettingScreen,
  AddressScreen,
  Cart,
  CheckoutScreen,
  DetailScreen,
  EditAddressScreen,
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  MyPurchaseScreen,
  OTPForgotScreen,
  OTPScreen,
  OrderDetailScreen,
  PaymentMethodScreen,
  PaymentSuccess,
  ProductFavoritesScreen,
  ProductScreen,
  ProfileScreen,
  RatingScreen,
  RegisterScreen,
  SearchProductScreen,
  SelectVoucherScreen,
  SetPasswordForgotScreen,
  SetPasswordScreen,
  VoucherScreen,
} from 'screens';
import { AppStackNavigatorParamList } from './types';

const Stack = createNativeStackNavigator<AppStackNavigatorParamList>();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Main" component={HomeScreen} options={{ headerTitle: 'Home' }} />
    <Stack.Screen name="Detail" component={DetailScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="OTP" component={OTPScreen} />
    <Stack.Screen name="OTPForgot" component={OTPForgotScreen} />
    <Stack.Screen name="SetPassword" component={SetPasswordScreen} />
    <Stack.Screen name="ForgotPassWord" component={ForgotPasswordScreen} />
    <Stack.Screen name="Rating" component={RatingScreen} />
    <Stack.Screen name="Address" component={AddressScreen} />
    <Stack.Screen name="EditAddress" component={EditAddressScreen} />
    <Stack.Screen name="Cart" component={Cart} />
    <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />
    <Stack.Screen name="SelectVoucher" component={SelectVoucherScreen} />
    <Stack.Screen name="SetPasswordForgot" component={SetPasswordForgotScreen} />
    <Stack.Screen name="SearchProduct" component={SearchProductScreen} />
    <Stack.Screen name="Product" component={ProductScreen} />
    <Stack.Screen name="ProductFavorites" component={ProductFavoritesScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="AccountSettings" component={AccountSettingScreen} />
    <Stack.Screen name="AccountSecurity" component={AccountSecurityScreen} />
    <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
    <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />
    <Stack.Screen name="MyPurchaseScreen" component={MyPurchaseScreen} />
    <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    <Stack.Screen name="VoucherScreen" component={VoucherScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
