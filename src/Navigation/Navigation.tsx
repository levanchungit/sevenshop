import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomePage from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();
type Props = object;

const Navigation = (props: Props) => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Settings" component={HomePage} /> */}
    </Tab.Navigator>
  );
};

export default Navigation;
