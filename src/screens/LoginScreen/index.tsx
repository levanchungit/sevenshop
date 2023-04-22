import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
} from 'native-base';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';
import * as Icons from 'react-native-feather';
import SSTextInput from 'components/SSTextInput';
import { URL_IMG_AUTH } from 'global/constants';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';

const LoginScreen = React.memo(() => {
  const { t } = useTranslation();
  const navigation = useNavigation<AppNavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [device_id, setDeviceId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('fcm_token').then((token) => {
      if (token !== null) setDeviceId(token);
    });
  }, []);

  const handleLogin = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await authAPI.login({ email, password, device_id });
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
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  return (
    <KeyboardAvoidingView
      height={'100%'}
      bgColor={'white'}
      behavior="position"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <VStack>
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
          {t('Login.title')}
        </Text>

        <VStack space={1}>
          <SSTextInput
            placeholder={t('Login.email')}
            value={email}
            changeValue={setEmail}
            inputLeftElement={<Icons.User stroke="#1C1C1C" width={24} height={24} />}
            typePassword={false}
          ></SSTextInput>

          <SSTextInput
            placeholder={t('Login.password')}
            value={password}
            changeValue={setPassword}
            typePassword={true}
            inputLeftElement={<Icons.Lock stroke="#1C1C1C" width={24} height={24} />}
          ></SSTextInput>

          <Center mt={2}>
            <HStack w="80%" alignItems="flex-end" justifyContent={'flex-end'}>
              <Text variant={'body2'} color="primary.600" onPress={handleForgotPassword}>
                {t('Login.forgotPassword')}
              </Text>
            </HStack>
          </Center>

          <Center mt={2}>
            <Button variant="btn_red" onPress={handleLogin}>
              Login
            </Button>
          </Center>

          <Center mt={4}>
            <Text variant={'body2'}>{t('Login.loginWith')}</Text>
          </Center>

          <Center mt={4}>
            <HStack alignItems={'center'}>
              <Text variant={'body1'}>{t('Login.notHaveAccount')}</Text>
              <Text variant={'button'} color="primary.600" ml={1} onPress={handleRegister}>
                {t('Login.register')}
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
