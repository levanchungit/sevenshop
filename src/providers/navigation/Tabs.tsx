import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icons from 'react-native-feather';
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
      screenOptions={({ route }: any) => ({
        headerShown: false,
        tabBarStyle: {
          height: 85,
          alignItems: 'center',
          paddingHorizontal: 50,
          paddingTop: 10,
        },
        tabBarIcon: ({ focused }: any) => {
          if (route.name === 'Home') {
            return focused ? <Icons.Home fill="black" /> : <Icons.Home stroke={'black'} />;
          } else if (route.name === 'Favorites') {
            return focused ? <Icons.Heart fill={'black'} /> : <Icons.Heart stroke={'black'} />;
          } else if (route.name === 'Notification') {
            return focused ? <Icons.Bell fill={'black'} /> : <Icons.Bell stroke={'black'} />;
          } else if (route.name === 'Profile') {
            return focused ? <Icons.User fill={'black'} /> : <Icons.User stroke={'black'} />;
          }

          return <Icons.Activity />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Screen name="Home" options={{ tabBarLabel: '' }} component={MainScreen} />
      <Screen name="Favorites" options={{ tabBarLabel: '' }} component={FavoriteScreen} />
      <Screen
        name="Notification"
        options={{
          tabBarLabel: '',
          tabBarBadge: quantity,
          tabBarBadgeStyle: { marginTop: 10, backgroundColor: '#AC1506' },
        }}
        component={NotificationScreen}
      />
      <Screen name="Profile" options={{ tabBarLabel: '' }} component={ProfileScreen} />
    </Navigator>
  );
};

export default BottomTabs;
