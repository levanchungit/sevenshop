import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from 'screens/DetailsScreen';
import HomeScreen from 'screens/HomeScreen';
import RegisterScreen from 'screens/RegisterScreen';
import { AppStackNavigatorParamList } from './types';

const AppStack = createNativeStackNavigator<AppStackNavigatorParamList>();
const { Navigator, Screen } = AppStack;

const StackNavigator = () => {
  return (
    <Navigator initialRouteName="Register" screenOptions={{ headerShown: false }}>
      <Screen name="Register" component={RegisterScreen} />
      <Screen
        name="Main"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
        }}
      />
      <Screen name="Details" component={DetailScreen} />
    </Navigator>
  );
};

export default StackNavigator;
