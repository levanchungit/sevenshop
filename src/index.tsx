import React, { useEffect, useState, useCallback } from 'react';
import { Raleway_400Regular, Raleway_500Medium, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { StripeProvider } from '@stripe/stripe-react-native';
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
    <StripeProvider
      publishableKey="pk_live_51Mnj6VJyku6LTTLY9BLNiANO9hlUVAx9FJMHwvUAHNWnJrGoSJbpZjznVmQ8t2RNXwW4wl3XNWD2R5mCk9rKIp5V00SIq6PHu4"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{SevenShop}}" // required for Apple Pay
    >
      <Provider onLayout={onLayoutRootView}>
        <StackNavigator />
      </Provider>
    </StripeProvider>
  );
}
