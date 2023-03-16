import React, { useCallback, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  Button,
  Image,
  Toast,
  Spinner,
  Box,
  KeyboardAvoidingView,
  VStack,
  HStack,
  Center,
  View,
} from 'native-base';
import * as Icons from 'react-native-feather';
import SSTextInput from 'components/SSTextInput';
import { URL_IMG_AUTH } from 'global/constants';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';
import 'expo-dev-client';

const LoginScreen = React.memo(() => {
  const navigation = useNavigation<AppNavigationProp>();

  GoogleSignin.configure({
    webClientId: '843706998527-8dmdi1r71bsj4h3ltkj374p1t2j1dgrc.apps.googleusercontent.com',
  });
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState('khuyenpv0509@gmail.com');
  const [password, setPassword] = useState('123456');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await authAPI.login({ email, password });
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
      navigation.navigate('Main');
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
    setIsLoading(false);
  }, [email, password, navigation]);

  const handleForgotPassword = useCallback(() => {
    navigation.navigate('ForgotPassWord');
  }, [navigation]);

  const handleRegister = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    console.log(user);
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (initializing) return null;

  // const onSubmit = async () => {
  //   try {
  //     const response = await authAPI.login({ email, password });
  //     Toast.show({
  //       title: response.data.message,
  //       duration: 3000,
  //     });
  //     navigation.navigate('Main');
  //   } catch (e: any) {
  //     Toast.show({
  //       title: e.response?.data?.message,
  //       duration: 3000,
  //     });
  //   }
  // };

  return (
    <KeyboardAvoidingView>
      <VStack height={'100%'} bgColor={'white'}>
        <Image
          alt="Image Login"
          h={250}
          borderBottomLeftRadius={12}
          borderBottomRightRadius={12}
          source={{
            uri: URL_IMG_AUTH,
          }}
        />

        <Text variant={'h2'} mt={5} textAlign="center">
          Login
        </Text>

        <VStack space={1}>
          <SSTextInput
            placeholder={'Enter your email/phone number'}
            value={email}
            changeValue={setEmail}
            inputLeftElement={<Icons.User stroke="#1C1C1C" width={24} height={24} />}
            typePassword={false}
          ></SSTextInput>

          <SSTextInput
            placeholder={'Enter your password'}
            value={password}
            changeValue={setPassword}
            typePassword={true}
            inputLeftElement={<Icons.Lock stroke="#1C1C1C" width={24} height={24} />}
          ></SSTextInput>

          <Center mt={2}>
            <HStack w="80%" alignItems="flex-end" justifyContent={'flex-end'}>
              <Text variant={'body2'} color="primary.600" onPress={handleForgotPassword}>
                Forgot password?
              </Text>
            </HStack>
          </Center>

          <Center mt={2}>
            <Button variant="btn_red" onPress={handleLogin}>
              Login
            </Button>
          </Center>

          <Center mt={4}>
            <Text variant={'body2'}>Or login with</Text>
          </Center>

          <View>
            {!user && (
              <GoogleSigninButton
                style={{ width: 300, height: 65 }}
                onPress={onGoogleButtonPress}
              ></GoogleSigninButton>
            )}
          </View>

          <Center mt={4}>
            <HStack alignItems={'center'}>
              <Text variant={'body1'}>Don’t you have an account?</Text>
              <Text variant={'button'} color="primary.600" ml={1} onPress={handleRegister}>
                Register
              </Text>
            </HStack>
          </Center>
        </VStack>

        {isLoading ? (
          <Box
            display={'flex'}
            justifyContent="center"
            backgroundColor={'rgba(0,0,0,0.1)'}
            w={'100%'}
            height={'100%'}
            position="absolute"
            alignItems="center"
          >
            <Spinner size={50}></Spinner>
          </Box>
        ) : null}
      </VStack>
    </KeyboardAvoidingView>
  );
});

export default LoginScreen;
