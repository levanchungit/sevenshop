import React, { useEffect, useState, useCallback } from 'react';
import {
  Raleway_100Thin,
  Raleway_100Thin_Italic,
  Raleway_200ExtraLight,
  Raleway_200ExtraLight_Italic,
  Raleway_300Light,
  Raleway_300Light_Italic,
  Raleway_400Regular,
  Raleway_400Regular_Italic,
  Raleway_500Medium,
  Raleway_500Medium_Italic,
  Raleway_600SemiBold,
  Raleway_600SemiBold_Italic,
  Raleway_700Bold,
  Raleway_700Bold_Italic,
  Raleway_800ExtraBold,
  Raleway_800ExtraBold_Italic,
  Raleway_900Black,
} from '@expo-google-fonts/raleway';
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
          Raleway_100Thin,
          Raleway_100Thin_Italic,
          Raleway_200ExtraLight,
          Raleway_200ExtraLight_Italic,
          Raleway_300Light,
          Raleway_300Light_Italic,
          Raleway_400Regular,
          Raleway_400Regular_Italic,
          Raleway_500Medium,
          Raleway_500Medium_Italic,
          Raleway_600SemiBold,
          Raleway_600SemiBold_Italic,
          Raleway_700Bold,
          Raleway_700Bold_Italic,
          Raleway_800ExtraBold,
          Raleway_800ExtraBold_Italic,
          Raleway_900Black,
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
