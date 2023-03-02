import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Address from 'screens/AddressScreen';
import Cart from 'screens/CartScreen';
import DetailScreen from 'screens/DetailsScreen';
import ForgotPasswordScreen from 'screens/FogotPasswordScreen';
import HomeScreen from 'screens/HomeScreen';
import LoginScreen from 'screens/LoginScreen';
import OTPScreen from 'screens/OTPScreen';
import RegisterScreen from 'screens/RegisterScreen';
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
      <Screen name="Details" component={DetailScreen} />
      <Screen name="Register" component={RegisterScreen} />
      <Screen name="OTP" component={OTPScreen} />
      <Screen name="SetPassWord" component={SetPassWordScreen} />
      <Screen name="ForgotPassWord" component={ForgotPasswordScreen} />
      <Screen name="Address" component={Address} />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
};

export default StackNavigator;
