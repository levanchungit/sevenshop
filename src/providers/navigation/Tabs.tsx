import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from 'screens/FavoriteScreen';
import { MainScreen } from 'screens/MainScreen';
import ProfileScreen from 'screens/ProfileScreen';
import { BottomTabNavigatorParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();
const { Navigator, Screen } = Tab;

const BottomTabs = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={MainScreen} />
      <Screen name="Favorites" component={FavoriteScreen} />
      <Screen name="Cart" component={ProfileScreen} />
      <Screen name="Profile" component={ProfileScreen} />
    </Navigator>
  );
};

export default BottomTabs;
