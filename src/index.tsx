import React, { useEffect, useState, useCallback } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import { View, Text } from 'react-native';
import Home from 'screens/Home';
import styles from 'styles/global';

SplashScreen.preventAutoHideAsync();
SystemUI.setBackgroundColorAsync('#eafafc');

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await SystemUI.getBackgroundColorAsync();
        await new Promise((resolve) => setTimeout(resolve, 2000));
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Home />
      <Text>Hello World</Text>
      <Entypo name="rocket" size={30} />
      <StatusBar style="auto" />
    </View>
  );
}
