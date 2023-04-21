import React, { useEffect, useState, useCallback } from 'react';
import { Raleway_400Regular, Raleway_500Medium, Raleway_700Bold } from '@expo-google-fonts/raleway';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { StripeProvider } from '@stripe/stripe-react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'providers';
import { StackNavigator } from 'providers/navigation';
import { CheckoutProvider } from 'screens/CheckoutScreen/CheckoutContext';
SplashScreen.preventAutoHideAsync();

const PUBLISHABLE_KEY =
  'pk_test_51MgPdmCk11jVaxFuC3vBWZ4FbIS0Hunvfibx3RPeugSIOPT1YIeBWAdiXa654A28aC3Nd0YoCB4h6uNoZjEjXUs700zjmgQsNk';

const App = React.memo(() => {
  const [appIsReady, setAppIsReady] = useState(false);

  //firebase push notification
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  useEffect(() => {
    const initializeMessaging = async () => {
      await requestUserPermission();
      messaging()
        .getToken()
        .then((token: any) => {
          console.log('TOKEN FCM', token);
          AsyncStorage.setItem('fcm_token', token);
        });
      // ...
    };
    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification
          );
        }
      });

    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification
      );
    });

    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    initializeMessaging();

    return unsubscribe;
  }, []);

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
      <StripeProvider publishableKey={PUBLISHABLE_KEY}>
        <CheckoutProvider>
          <StackNavigator />
        </CheckoutProvider>
      </StripeProvider>
    </Provider>
  );
});

export default App;
