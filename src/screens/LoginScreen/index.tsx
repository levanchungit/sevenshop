import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Center, FormControl, Input, Text, Toast, VStack } from 'native-base';
import { clearAuthTokens, getRefreshToken } from 'react-native-axios-jwt';
import { RefreshTokenPayload, SignInPayload } from 'interfaces/Auth';
import { authAPI } from 'modules/api';
import { AppNavigationProp } from 'providers/navigation/types';

const LoginScreen = () => {
  const [formData, setData] = useState<SignInPayload>({
    email: 'ryanvo.0162@gmail.com',
    password: '123456',
  });
  const [refreshToken, setRefreshToken] = useState<RefreshTokenPayload>({ refresh_token: '' });
  const navigation = useNavigation<AppNavigationProp>();

  const onSubmit = async () => {
    clearAuthTokens();
    try {
      const response = await authAPI.login(formData);
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
  };

  const fetchData = async () => {
    try {
      const response = await authAPI.me();
      Toast.show({
        title: response.data.result.email,
        duration: 3000,
      });
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
  };
  const logout = async () => {
    getRefreshToken().then((token) => {
      setRefreshToken({ refresh_token: token });
    });
    try {
      await authAPI.logout(refreshToken);
      clearAuthTokens();
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
  };

  return (
    <Center flex="1">
      <Text variant="h1">Login Screen</Text>
      <Button variant="primary" endIcon={<></>}>
        Button
      </Button>
      <VStack width="90%" mx="3" maxW="300px">
        <FormControl isRequired>
          <FormControl.Label
            _text={{
              bold: true,
            }}
          >
            Email
          </FormControl.Label>
          <Input
            placeholder="Email"
            autoComplete="email"
            autoCapitalize="none"
            value={formData.email}
            onChangeText={(value) => setData({ ...formData, email: value })}
          />
          <FormControl.Label
            _text={{
              bold: true,
            }}
          >
            Password
          </FormControl.Label>
          <Input
            placeholder="Password"
            secureTextEntry
            value={formData.password}
            onChangeText={(value) => setData({ ...formData, password: value })}
          />
        </FormControl>
        <Button onPress={onSubmit} mt="5" colorScheme="cyan">
          Login
        </Button>
      </VStack>
      <Button fontWeight={700} fontSize="2xl" bg="primary.400" onPress={logout}>
        Logout
      </Button>
      <Button fontWeight={700} fontSize="2xl" bg="primary.400" onPress={fetchData}>
        Fetch Data
      </Button>
    </Center>
  );
};

export default LoginScreen;
