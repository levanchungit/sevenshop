import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationProvider } from './navigation';

type ProviderProps = {
  children: React.ReactNode;
  onLayout?: () => void;
};

export function Provider({ children, onLayout }: ProviderProps) {
  return (
    <NavigationProvider onLayout={onLayout}>
      <NativeBaseProvider>{children}</NativeBaseProvider>
    </NavigationProvider>
  );
}
