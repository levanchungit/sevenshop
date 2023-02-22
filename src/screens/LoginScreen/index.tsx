import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Toast, Center, Button, VStack, Input, FormControl } from 'native-base';
import { clearAuthTokens, getRefreshToken } from 'react-native-axios-jwt';
import { RefreshTokenPayload, SignInPayload } from 'interfaces/Auth';
import { authAPI } from 'modules/api';
import { AppNavigationProp } from 'providers/navigation/types';
import styles from './style';
type Props = object;

const LoginScreen = (props: Props) => {
  const [formData, setFormData] = useState<SignInPayload>({
    email: 'levanchunq123@gmail.com',
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
      const response = await authAPI.logout(refreshToken);
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
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
      <Text variant={'h1'}>Login</Text>
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
            onChangeText={(value) => setFormData({ ...formData, email: value })}
            style={styles.inputuser}
          />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label
            _text={{
              bold: true,
            }}
          >
            Password
          </FormControl.Label>
          <Input
            placeholder="Enter your password"
            autoComplete="email"
            autoCapitalize="none"
            value={formData.password}
            onChangeText={(value) => setFormData({ ...formData, password: value })}
            style={styles.inputuser}
            secureTextEntry={true}
          />
        </FormControl>

        <Button my={2} onPress={onSubmit}>
          Login
        </Button>
        <Button my={2} onPress={logout}>
          Logout
        </Button>
        <Button my={2} onPress={fetchData}>
          Me
        </Button>
      </VStack>
    </Center>
  );
};

export default LoginScreen;
