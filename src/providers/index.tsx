import React from 'react';
import { NativeBaseProvider } from 'native-base';
import theme from 'theme';
import { NavigationProvider } from './navigation';

type ProviderProps = {
  children: React.ReactNode;
  onLayout?: () => void;
};

export function Provider({ children, onLayout }: ProviderProps) {
  return (
    <NavigationProvider onLayout={onLayout}>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </NavigationProvider>
  );
}
