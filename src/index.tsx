import React, { useEffect, useState, useCallback } from 'react';
import { Raleway_400Regular, Raleway_500Medium, Raleway_700Bold } from '@expo-google-fonts/raleway';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'providers';
import { StackNavigator } from 'providers/navigation';
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Raleway_400Regular,
          Raleway_500Medium,
          Raleway_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider onLayout={onLayoutRootView}>
      <StackNavigator />
    </Provider>
  );
}
