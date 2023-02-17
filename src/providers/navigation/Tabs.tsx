import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from 'screens/FavoriteScreen';
import { MainScreen } from 'screens/MainScreen';
import NotificationScreen from 'screens/NotificationScreen';
import ProfileScreen from 'screens/ProfileScreen';
import { BottomTabNavigatorParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();
const { Navigator, Screen } = Tab;

type Props = {
  quantity: number;
};
const BottomTabs = (props: Props) => {
  const { quantity } = props;
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Screen name="Home" options={{ tabBarLabel: '' }} component={MainScreen} />
      <Screen name="Favorites" options={{ tabBarLabel: '' }} component={FavoriteScreen} />
      <Screen
        name="Notification"
        options={{ tabBarLabel: '', tabBarBadge: quantity }}
        component={NotificationScreen}
      />
      <Screen name="Profile" options={{ tabBarLabel: '' }} component={ProfileScreen} />
    </Navigator>
  );
};

export default BottomTabs;
