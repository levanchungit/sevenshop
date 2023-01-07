import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Text, View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import TextInputGlobal from '../../components/TextInput';

const Login = () => {
  const [fontsLoaded] = useFonts({
    RalewayBold: require('../../assets/fonts/RalewayBold.ttf'),
    RalewaySemiBold: require('../../assets/fonts/RalewaySemiBold.ttf'),
    RalewayRegular: require('../../assets/fonts/RalewayRegular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <SafeAreaView onLayout={onLayoutRootView}>
        <Text fontFamily="RalewayBold" color="amber.800" fontSize="4xl" textAlign="center">
          Hello Quyền!
        </Text>
        <Button style={{ width: 200 }} onPress={() => alert('Hello Quyền nè')} title="Hello" />
        <TextInputGlobal placeholder="Nhập tên của bạn vào đây" style={{ width: 300 }} />
      </SafeAreaView>
    </View>
  );
};

export default Login;
