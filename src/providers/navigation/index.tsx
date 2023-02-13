import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

type NavigationProviderProps = {
  children: React.ReactElement;
  onLayout?: () => void;
};

export function NavigationProvider({ children, onLayout }: NavigationProviderProps) {
  return <NavigationContainer onReady={onLayout}>{children}</NavigationContainer>;
}

export { default as StackNavigator } from './AppStack';
