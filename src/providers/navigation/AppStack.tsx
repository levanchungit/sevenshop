import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Address from 'screens/AddressScreen';
import Cart from 'screens/CartScreen';
import DetailScreen from 'screens/DetailsScreen';
import EditAddressScreen from 'screens/EditAddressScreen';
import ForgotPasswordScreen from 'screens/FogotPasswordScreen';
import HomeScreen from 'screens/HomeScreen';
import LoginScreen from 'screens/LoginScreen';
import OTPForgotScreen from 'screens/OTPForgotScreen';
import OTPScreen from 'screens/OTPScreen';
import PaymentSuccess from 'screens/PaynmentSuccess';
import RegisterScreen from 'screens/RegisterScreen';
import SelectVoucherScreen from 'screens/SelectVoucherScreen';
import SetPasswordForgotScreen from 'screens/SetPasswordForgotScreen';
import SetPassWordScreen from 'screens/SetPasswordScreen';
import { AppStackNavigatorParamList } from './types';

const AppStack = createNativeStackNavigator<AppStackNavigatorParamList>();
const { Navigator, Screen } = AppStack;

const StackNavigator = () => {
  return (
    <Navigator initialRouteName="SelectVoucher" screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={LoginScreen} />
      <Screen
        name="Main"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
        }}
      />
      <Screen name="Details" component={DetailScreen} />
      <Screen name="Register" component={RegisterScreen} />
      <Screen name="OTP" component={OTPScreen} />
      <Screen name="OTPForgot" component={OTPForgotScreen} />
      <Screen name="SetPassWord" component={SetPassWordScreen} />
      <Screen name="ForgotPassWord" component={ForgotPasswordScreen} />
      <Screen name="Address" component={Address} />
      <Screen name="EditAddress" component={EditAddressScreen} />
      <Screen name="Cart" component={Cart} />
      <Screen name="PaymentSuccess" component={PaymentSuccess} />
      <Screen name="SelectVoucher" component={SelectVoucherScreen} />
      <Screen name="SetPassWordForgot" component={SetPasswordForgotScreen} />
      <Screen name="PaymentSuccess" component={PaymentSuccess} />
    </Navigator>
  );
};

export default StackNavigator;
