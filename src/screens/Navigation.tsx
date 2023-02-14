import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Cart from './CartScreen';
import HomePage from './HomeScreen';

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;
            if (route.name === 'Home111') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Favorite') {
              iconName = focused ? 'heart' : 'heart';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="Home111"
          component={HomePage}
          options={{
            title: 'My home111',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen name="Favorite" component={HomePage} />
        <Tab.Screen name="Cart" component={HomePage} />
        <Tab.Screen name="Settings" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
