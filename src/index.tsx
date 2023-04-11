import React, { useEffect, useState, useCallback } from 'react';
import { Raleway_400Regular, Raleway_500Medium, Raleway_700Bold } from '@expo-google-fonts/raleway';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'providers';
import { StackNavigator } from 'providers/navigation';
import { CheckoutProvider } from 'screens/CheckoutScreen/CheckoutContext';
SplashScreen.preventAutoHideAsync();

const App = React.memo(() => {
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
      <CheckoutProvider>
        <StackNavigator />
      </CheckoutProvider>
    </Provider>
  );
});

export default App;
